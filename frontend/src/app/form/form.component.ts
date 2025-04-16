import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'

})export class FormComponent {

  APIURL = "http://127.0.0.1:5000/api";
  nome = new FormControl('');
  interesse_id = new FormControl("Selecione uma opção");
  estado_id = new FormControl("Selecione uma opção");
  formElement: HTMLFormElement = document.createElement('form');
  data: object = {};

  constructor() {
    this.formElement.addEventListener('submit', this.getSolution.bind(this));
  }

  async getSolution($event: any) {
    $event.preventDefault();

    const formData: FormData = new FormData(this.formElement);

    let user = {
      "name": this.nome.value,
      "soluctionId": this.interesse_id.value,
      "locationId": this.estado_id.value
    }

    await fetch(this.APIURL+"/usuarios", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => {
      console.log(res);
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });

  }
}

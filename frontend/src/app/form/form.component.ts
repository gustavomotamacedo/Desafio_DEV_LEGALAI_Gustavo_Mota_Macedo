import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})export class FormComponent {

  router: Router = inject(Router);
  httpClient: HttpClient = inject(HttpClient);
  APIURL: string = "http://127.0.0.1:5000/api";
  nome = new FormControl('');
  interesse_id = new FormControl("Selecione uma opção");
  estado_id = new FormControl("Selecione uma opção");
  formElement: HTMLFormElement = document.createElement('form');

  constructor() {
    this.formElement.addEventListener('submit', this.setUserAndGoToSolution.bind(this));
  }

  async setUserAndGoToSolution($event: any) {
    $event.preventDefault();

    const formData: FormData = new FormData(this.formElement);

    let dataUser = {
      "name": this.nome.value,
      "interesse_id": this.interesse_id.value,
      "estado_id": this.estado_id.value
    }

    console.log(dataUser);

    this.httpClient.post(this.APIURL+"/usuarios", dataUser).subscribe((response: any) => {
      console.log(response);
    }); 

    this.router.navigate(['/solution']);
  }
}

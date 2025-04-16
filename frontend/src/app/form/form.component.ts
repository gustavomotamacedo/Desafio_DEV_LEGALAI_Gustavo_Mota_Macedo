import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'

})export class FormComponent {

  name = new FormControl('');
  soluctionId = new FormControl("Selecione uma opção");
  locationId = new FormControl("Selecione uma opção");
  formElement: HTMLFormElement = document.createElement('form');
  formData: object = {};

  constructor() {
    this.formElement.addEventListener('submit', this.getSolution.bind(this));
  }

  getSolution($event: any) {
    $event.preventDefault();

    this.formData = new FormData(this.formElement);
    console.log(this.formData);
  }
}

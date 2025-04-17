import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-solution',
  imports: [HttpClientModule],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {

  APIURL: string = 'https://desafio-dev-legalai-gustavo-mota-macedo.onrender.com/api';
  solution: any;
  solutions: any;
  orderSolutions: any;	

  httpClient: HttpClient = inject(HttpClient);

  constructor() { 
    setTimeout(() => {
      this.getSolution();
    }, 500);	
    this.getSolution();
  }

  async getSolution() {

    this.httpClient.get(this.APIURL + "/solucao").subscribe(data => {
      console.log(data);
      this.solution = data;
    });

    this.httpClient.get(this.APIURL + "/solucoes").subscribe(data => {
      console.log(data);
      this.solutions = data;
    });

    setTimeout(() => {
      this.updateValues();
    }, 500);
  }

  updateValues() {
    this.orderSolutions = [];

    for (let i = 0; i < this.solutions.length; i++) {
      if (this.solution.nome == this.solutions[i].nome) {
        continue;
      }
      this.orderSolutions.push(this.solutions[i]);
    }
    this.orderSolutions.pop();
    for (let i = 0; i < this.orderSolutions.length; i++) {
      let aux = this.orderSolutions[i];
      if (i == 1) {
        this.orderSolutions[i] = this.solution;
        this.orderSolutions.push(aux);
      } else {
        continue;
      }
    }
  }
}

import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-solution',
  imports: [HttpClientModule],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {

  APIURL: string = 'http://127.0.0.1:5000/api';
  solution: any;
  solutions: any;
  solucaoNome: string[] = [];
  solucaoDesc: string[] = [];

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
    }, 325);
  }

  updateValues() {
    this.solucaoNome = [];
    this.solucaoDesc = [];

    this.solucaoNome.push(this.solution.nome);
    this.solucaoDesc.push(this.solution.descricao);
    for (let i = 0; i < this.solutions.length; i++) {
      if (this.solucaoNome.includes(this.solutions[i].nome)) {
        continue;
      }
      this.solucaoNome.push(this.solutions[i].nome);
      this.solucaoDesc.push(this.solutions[i].descricao);
    }
  }
}

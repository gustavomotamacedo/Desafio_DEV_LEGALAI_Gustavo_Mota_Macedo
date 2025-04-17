import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-solution',
  imports: [HttpClientModule],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {

  APIURL: string = 'http://127.0.0.1:5000/api/solucao';
  solution: any;
  solucaoNome: string = '';
  solucaoDesc: string = '';

  httpClient: HttpClient = inject(HttpClient);

  constructor() { 
    setTimeout(() => {
      this.getSolution();
    }, 500);	
    this.getSolution();
  }

  async getSolution() {

    this.httpClient.get(this.APIURL).subscribe(data => {
      console.log(data);
      this.solution = data;
    });

    this.solucaoNome = this.solution?.nome;
    this.solucaoDesc = this.solution?.descricao;
  }
}

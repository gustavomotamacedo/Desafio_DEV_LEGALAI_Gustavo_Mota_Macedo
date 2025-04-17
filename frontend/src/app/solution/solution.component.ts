import { Component } from '@angular/core';

@Component({
  selector: 'app-solution',
  imports: [],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {

  APIURL: string = 'http://127.0.0.1:5000/api/solucao';
  solution: any;

  constructor() { 
    setTimeout(() => {
      this.getSolution();
    }, 500);	
    this.getSolution();
  }

  async getSolution() {
    this.solution = await fetch(this.APIURL, {
      method: 'GET'
    }).then(res => {
      console.log(res);
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });

    console.log(this.solution.data);
  }
}

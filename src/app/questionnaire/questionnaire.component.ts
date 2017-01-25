import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  
})
export class QuestionnaireComponent implements OnInit {
  
  questions = [{
    id: 1,
    text: 'Have you slept enough?',
    answers: [{
      id: 1,
      text: 'Yes',
      type: 'sleep',
      value: 1
    },
    {
      id: 2,
      text: 'No',
      type: 'sleep',
      value: 0
    }]

  },
  {
    id: 2,
    text: 'Have you eaten?',
    answers: [{
      id: 1,
      text: 'Yes',
      type: 'food',
      value: 1
    },
    {
      id: 2,
      text: 'No',
      type: 'food',
      value: 0
    }]
    
  

  },
  
  ];

  title: string;

  constructor(private _countService: CountService) { 

   }

  ngOnInit() {
 this.title = this._countService.someMethod();
  }

}

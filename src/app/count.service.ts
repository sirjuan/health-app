import { Injectable } from '@angular/core';

@Injectable()
export class CountService {
  questions = [
    {typeId: 0, typeName: 'sleep', content: [ { id: 1, type: 'sleep',text: 'Have you slept enough?', answers: [{ id: 1, text: 'Yes', value: 1 }, { id: 0, text: 'No', value: 0 }] } ]},
    {typeId: 1, typeName: 'food', content: [ 
{ id: 2, type: 'food', text: 'Have you eaten?', answers: [{ id: 1, text: 'Yes', value: 1 }, { id: 0, text: 'No', value: 0 }] },
    { id: 3, type: 'food', text: 'Have you eaten too much?', answers: [{ id: 1, text: 'Yes', value: 1 }, { id: 0, text: 'No', value: 0 }] },
    ]}
    

  ];

  countAnswers = [
    
     [],
     []  
      
      ];

  sleepCount = [];
  counter = 1;

  countValues(id, value) {
    console.log('joo');
    console.log(value);
    console.log(id);

      this.countAnswers[id].push(value);
      console.log(this.countAnswers[id]);


  }

  showValues(id) {
      var sum = this.countAnswers[id].reduce(function(a, b) {
  return a + b;
}, 0);
      
      return sum + ' / ' + this.countAnswers[id].length;
      
  }
  
  someMethod() {
    return 'Hey!'
  }

  getQuestions() {
    console.log(this.questions);
    return this.questions;
    
  }
  getAnswers() {
    console.log()
    return this.countAnswers;
  }
  constructor() { }

  isActive() {

  }

}

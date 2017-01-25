import { Injectable } from '@angular/core';

@Injectable()
export class CountService {

  foodCount = [];
  sleepCount = [];

  countValues(type, value) {
    console.log('joo');
    console.log(value);
    console.log(type);
    if (type == 'food') {
      this.foodCount.push(value);
      console.log(this.foodCount);
    }
    if (type == 'food') {
      this.sleepCount.push(value);
      console.log(this.sleepCount);
    }

  }

  showValues(type) {
    if (type == 'food') {

      var sum = this.foodCount.reduce(function(a, b) {
  return a + b;
}, 0);
      
      return sum + ' / ' + this.foodCount.length;
    }
    
  }
  
  someMethod() {
    return 'Hey!'
  }
  constructor() { }

}

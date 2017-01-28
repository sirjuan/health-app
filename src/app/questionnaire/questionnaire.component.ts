import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  
})
export class QuestionnaireComponent implements OnInit {
  counter = 1;
  questions = [];
  quizQuestions = [];
  someProperty = false;
  title: string;

  isActive(id) {
    console.log()
    if (this.counter = this.questions[this.counter-1].id) {
        this.someProperty = true;
    }
  }
  setClasses(id) {

    console.log('id ' + id);
    console.log('counter ' + this.counter);
        if (this.counter = id) {
        this.someProperty = true;
    }
    let classes = {
      show: this.someProperty,
      notShow: !this.someProperty

    };
    return classes;

  }
  constructor(private _countService: CountService) { 

   }

  ngOnInit() {
this.questions = this._countService.getQuestions();

  }

}

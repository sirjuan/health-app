import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  foodCount = [];
  questions = [];
  answers =  [];
  constructor(private _countService: CountService) { }

  ngOnInit() {
   this.questions = this._countService.getQuestions();
   this.answers = this._countService.getAnswers();
  }

}

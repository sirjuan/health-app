import { Component } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    title: string;

  constructor(private _countService: CountService) { 

   }

  ngOnInit() {
    this.title = this._countService.someMethod();
  }
}

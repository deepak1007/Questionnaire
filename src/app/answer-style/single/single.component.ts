import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/services/data.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  isReadOnly : boolean = false;

  @Input('question')
  set question(question: Question) {
    this._answerOptions = question.options;
    if(question.answered) {
      this.isReadOnly = true
      this.selectedAnswer = question.correctAnswer;
    }
  }
  _answerOptions : string[];


  selectedAnswer : string | string[];

  @Output('answerChanged') 
  answerChanged = new EventEmitter()

  

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if(!this.selectedAnswer) return alert('please select an option first');
    this.answerChanged.emit(this.selectedAnswer);
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../services/data.model';

@Component({
  selector: 'app-answer-style',
  templateUrl: './answer-style.component.html',
  styleUrls: ['./answer-style.component.css']
})
export class AnswerStyleComponent implements OnInit {
  @Input('question') 
  question :  Question;

  @Output('answerChanged')
  answerChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setAnswer(answer : string | string[]) {
    this.answerChanged.emit(answer);
  }

}

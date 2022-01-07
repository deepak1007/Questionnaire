import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/services/data.model';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
  isReadOnly : boolean = false;
  answer : string = "";

  @Input('question') 
  set question(question : Question) {
    if(question.answered) {
      this.isReadOnly = true;
      this.answer = question.correctAnswer as string;
    }
  }

  @Output("answerChanged") 
  answerChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  save(answer: string) {
    if(answer.length <= 0) {
      return alert('please enter an answer to save');
    }
    if(answer.length > 256) {
      return alert('answer cannot have more than 256 characters')
    }

    this.answerChanged.emit(answer);
  }
}

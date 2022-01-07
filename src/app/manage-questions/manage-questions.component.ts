import { Component, OnInit } from '@angular/core';
import { Question } from '../services/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {
  questionList : Question[];

  constructor(
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.getQuestions();
  }


  getQuestions() {
    this.questionList = this.ds.getQuestions();
  }


  deleteQuestion(id: number) {
    this.ds.deleteQuestion(id)
    const index  = this.questionList.findIndex((question)=> question.id == id);
    if(index >= 0)
      this.questionList.splice(index, 1);
  }

}

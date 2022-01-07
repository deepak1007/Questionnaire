import { Injectable } from '@angular/core';
import { Question } from '../services/data.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dbName: string = "QUESTIONS";

  constructor() { }

  generateNewQuestionId() {
    return this.getQuestionListFromLocalStorage()?.length + 1;
  }

  saveNewQuestion(question : Question) {
    question.createdAt = new Date();
    const questions = this.getQuestionListFromLocalStorage();
    if(!(questions instanceof Array && questions.length > 0)) {
      const newQuestionList = [question];
      this.saveToLocalStorage(newQuestionList);
    } else {
      questions.push(question);
      this.saveToLocalStorage(questions);
    }
  }


  saveQuestion(editedQuestion: Question) {
    const questionList : Question[] = this.getQuestionListFromLocalStorage();
    const index = questionList.findIndex(
      (question : Question) => editedQuestion.id == question.id
    );
    questionList.splice(index, 1, {...editedQuestion});
    this.saveToLocalStorage(questionList);
  }


  getQuestion(questionId : number) : Question{
    return this.getQuestionListFromLocalStorage().find((question)=> question.id == questionId)
  }


  getQuestions() : Question[]{
    return this.getQuestionListFromLocalStorage();
  }


  deleteQuestion(questionId: number) {
    let questionList : Question[] = this.getQuestionListFromLocalStorage();
    questionList = questionList.filter(
      (question : Question) => questionId != question.id
    );
    console.log(questionList);
    this.saveToLocalStorage(questionList);
  }


  getQuestionListFromLocalStorage() : Question[] {
    return JSON.parse(localStorage.getItem(this.dbName)) || [];
  }
  
  saveToLocalStorage(questionList: Question[]) {
    localStorage.setItem(this.dbName, JSON.stringify(questionList));
  }
}

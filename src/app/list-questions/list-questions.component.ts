import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../services/data.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
	questionList : Question[];

	constructor(
		private ds : DataService,
		private router: Router,
		private route : ActivatedRoute
	) { }

	ngOnInit(): void {
		this.questionList = this.getQuestions();
	}

	getQuestions() {
		return this.ds.getQuestions();
	}

	saveAnswer(questionId : number, answer: string | string[]) {
		this.questionList = this.questionList.map((question : Question) : Question => {
			if(question.id == questionId) {
				return {
					...question, 
					answered: true, 
					correctAnswer: answer, 
					answeredAt: new Date()
				}
			}
			return question
		});

		this.ds.saveToLocalStorage(this.questionList);
	}

	markUnanswered(questionId : number) {
		this.questionList = this.questionList.map((question : Question) : Question => {
			if(question.id == questionId) {
				return {
					...question, 
					answered: false, 
					correctAnswer: null, 
					answeredAt: null
				}
			}
			return question
		});
		this.ds.saveToLocalStorage(this.questionList);
	}


	onAnchorClick ( ) {
		this.route.fragment.subscribe ( f => {
		  const element = document.querySelector ( "#" + f )
		  if ( element ) element.scrollIntoView ( {behavior: "smooth", block: "start", inline: "nearest"})
		});
	}
}

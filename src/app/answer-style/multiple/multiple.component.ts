import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Question } from 'src/app/services/data.model';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
	isReadOnly : boolean = false;
	_answerOptions : string[];
	@Input('question') 
	set question(question : Question) {
		this._answerOptions = question.options;
		this.generateForm(question.answered, question.correctAnswer);
	}

	@Output('answerChanged') 
	answerChanged = new EventEmitter()

	selectOptionForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private validatorService: ValidatorsService) {
	}

	ngOnInit() : void {}

	generateForm(isAnswered: boolean, selectedAnswer: string | string[]) : void {
		if(isAnswered)
			this.isReadOnly = true;

		const formFields : any = {};
		this._answerOptions.forEach((option)=>{
			let optionIsSelected = false
			if(selectedAnswer instanceof Array && selectedAnswer.indexOf(option) > -1)
				optionIsSelected = true;

				formFields[option] = [{value: optionIsSelected, disabled: this.isReadOnly}];
		})

		this.selectOptionForm = this.fb.group(formFields, {
			validators : [this.validatorService.answerCountValidator()]
		});
	}


	save() : void {
		if(this.selectOptionForm.invalid) 
			return alert('please select an option first');
		const selectedAnswers : string[] = this.stringifyAnswer(this.selectOptionForm.value);
		this.answerChanged.emit(selectedAnswers);
	}


	stringifyAnswer(selectedAnswersObj : any) : string[] {
		const selectedAnswerArray : string[] = []

		for(let selectedAnswer in selectedAnswersObj) {
			if(selectedAnswersObj[selectedAnswer])
				selectedAnswerArray.push(selectedAnswer)
		}
		return selectedAnswerArray;
	}

}

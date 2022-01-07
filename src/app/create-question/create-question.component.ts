import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ValidatorsService } from '../services/validators.service';
import { Question } from '../services/data.model';
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
	questionForm : FormGroup = this.fb.group({
		id : [this.ds.generateNewQuestionId()],
		question : ['', Validators.required],
		type: ['single', [Validators.required, Validators.pattern('single|multiple|open')]],
		answered : [false],
		newOptionValue: [],
		options : this.fb.array([]),
		createdAt: [],
		correctAnswer : [],
      	answeredAt : []
	}, {
		validators: [this.validatorService.optionCountValidator()]
	})

	focusedItem: number = -1;
	submitted : boolean = false;

	action : string = "create";
	questionId : number = -1;

	constructor(
		private fb : FormBuilder,
		private ds : DataService,
		private ar : ActivatedRoute,
		private validatorService : ValidatorsService,
		private router : Router
	) { }
	
	
	ngOnInit(): void {
		this.action = this.ar.snapshot.paramMap.get("action");
		if(this.action == "edit") {
			this.handleEdit();
		}
	}


	handleEdit() : void {
		const questionId : number = Number(this.ar.snapshot.paramMap.get('questionId'));
		if(isNaN(questionId)) {
			alert('invalid questionId');
			this.router.navigate(['/questions/manage']);
			return;
		}
		this.questionId = questionId;

		const fetchedQuestion : Question = this.getQuestion(this.questionId);
		if(!fetchedQuestion) { 
			alert('question doesn\'t extist')
			this.router.navigate(['/question/create']);
		}
		this.patchForm(fetchedQuestion);
	}


	getQuestion(questionId : number) : Question {
		return this.ds.getQuestion(questionId)
	}


	addOption() {
		if(!this.newOptionValueControl.value) return 
		this.optionsControl.push(this.newOption(this.newOptionValueControl.value));
		this.newOptionValueControl.patchValue('');
	}


	newOption(value: string) {
		return this.fb.control(value);
	}

	editOption(index: number) {
		if(this.questionForm.get('answered').value) {
			return alert('Cannot edit option as this question is marked answered.')
		}
		this.focusedItem = index;
	}


	deleteOption(i : number) {
		if(this.questionForm.get('answered').value) {
			return alert('Cannot delete option as this question is marked answered.')
		}
		this.optionsControl.controls.splice(i, 1);
	}


	onSubmit() {
		this.submitted = true;
		if(this.questionForm.status == "INVALID") {
			return alert('please fill valid details')
		}

		if(this.typeControl.value == "open") {
			this.optionsControl.controls.splice(0);
		}

		this.newOptionValueControl.setValue("");

		if(this.action == "edit") {
			return this.saveQuestion();
		}

		const newQuestion : Question = this.questionForm.getRawValue();
		this.ds.saveNewQuestion(newQuestion);
		this.router.navigate(['/'])
	}


	saveQuestion() {
		this.ds.saveQuestion(this.questionForm.getRawValue());
		this.router.navigate(['/'])
	}


	patchForm(question : Question) {
		this.questionForm.patchValue(question);
		if(question.type == "single" || question.type == "multiple")
		this.optionsControl.controls.push(
			...question.options.map((option)=> this.newOption(option))
		)
	}


	get questionControl() {
		return this.questionForm.controls['question'];
	}

	get typeControl() {
		return this.questionForm.controls['type']
	}

	get optionsControl() {
		return this.questionForm.controls['options'] as FormArray
	}

	get newOptionValueControl() {
		return this.questionForm.controls['newOptionValue']
	}

}

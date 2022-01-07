import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  optionCountValidator() : ValidatorFn {
    const validator : any = (formGroup: FormGroup) => {
        if(formGroup.get('options').value instanceof Array) {
            if(formGroup.get('type').value == "single" || formGroup.get('type').value == "multiple") {
                if(formGroup.get('options').value.length < 2 ) {
                  return {lessOptions: true}
                }
            }
        }
        return null;
      };

      return validator
  }


  answerCountValidator() : ValidatorFn {
    console.log('validator');
    const validator : any = (formGroup: FormGroup) => {
        for(let control in formGroup.value) {
          if(formGroup.value[control]) {
            return null
          }
        }
        return {lessAnswers: true}
      };

      return validator
  }
}

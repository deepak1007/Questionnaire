import { Pipe, PipeTransform } from '@angular/core';
import { Question } from 'src/app/services/data.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(questions: Question[], answered: boolean): Question[] {
    const filteredQuestions = questions.filter((question) =>  question.answered == answered );
    console.log(filteredQuestions);
    return filteredQuestions
  }

}

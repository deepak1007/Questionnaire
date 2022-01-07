import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../services/data.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(
    questions : Question[], 
    fieldName : "createdAt" | "answeredAt" | "id", 
    sortOrder: number = -1
  ): Question[] {
    const sortedArray = questions.sort(
      (question1, question2) =>  {
        const a = new Date(question1[fieldName]).getTime()
        const b = new Date(question2[fieldName]).getTime();
        return a-b
      }
    )
    if(sortOrder < 0) {
      return sortedArray.reverse();
    }

    return sortedArray;
  }

}

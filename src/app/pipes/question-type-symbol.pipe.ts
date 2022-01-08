import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionTypeSymbol'
})
export class QuestionTypeSymbolPipe implements PipeTransform {

  transform(type: string, ...args: unknown[]): string {
    const questionTypeSymbols = {
      single : "assets/images/bandmember.jpg",
      open : "assets/images/bandmember.jpg",
      multiple : "assets/images/bandmember.jpg",
    }

    return questionTypeSymbols[type as "single" | "open" | "multiple"];
  }

}

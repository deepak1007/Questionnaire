import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionTypeSymbol'
})
export class QuestionTypeSymbolPipe implements PipeTransform {

  transform(type: string, ...args: unknown[]): string {
    const questionTypeSymbols = {
      single : "assets/images/checkbox.png",
      open : "assets/images/text-input-icon.jpg",
      multiple : "assets/images/radio-on-button.png",
    }

    return questionTypeSymbols[type as "single" | "open" | "multiple"];
  }

}

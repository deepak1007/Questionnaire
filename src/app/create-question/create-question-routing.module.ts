import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './create-question.component';

const routes: Routes = [
  { path: ':action', component: CreateQuestionComponent },
  { path: ':action/:questionId', component: CreateQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuestionRoutingModule { }

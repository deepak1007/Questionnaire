import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';

const routes: Routes = [
  { path : '',  component: ManageQuestionsComponent},
  { path: 'questions/list', component: ListQuestionsComponent},
  { path: 'question', loadChildren: () => import('./create-question/create-question.module').then(m => m.CreateQuestionModule) },
  { path: 'answer-style', loadChildren: () => import('./answer-style/answer-style.module').then(m => m.AnswerStyleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

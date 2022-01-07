import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerStyleComponent } from './answer-style.component';

const routes: Routes = [{ path: '', component: AnswerStyleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerStyleRoutingModule { }

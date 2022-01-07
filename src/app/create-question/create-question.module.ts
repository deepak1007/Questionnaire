import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { CreateQuestionComponent } from './create-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    DragDropModule
  ]
})
export class CreateQuestionModule { }

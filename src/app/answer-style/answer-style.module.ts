import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerStyleRoutingModule } from './answer-style-routing.module';
import { AnswerStyleComponent } from './answer-style.component';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';
import { OpenComponent } from './open/open.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AnswerStyleComponent,
    SingleComponent,
    MultipleComponent,
    OpenComponent
  ],
  imports: [
    CommonModule,
    AnswerStyleRoutingModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports : [
    AnswerStyleComponent
  ]
})
export class AnswerStyleModule { }

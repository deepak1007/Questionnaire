import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { FilterPipe } from './pipes/filter.pipe';
import { AnswerStyleModule } from './answer-style/answer-style.module';
import { SortPipe } from './pipes/sort.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { QuestionTypeSymbolPipe } from './pipes/question-type-symbol.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ManageQuestionsComponent,
    ListQuestionsComponent,
    FilterPipe,
    SortPipe,
    QuestionTypeSymbolPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    AnswerStyleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

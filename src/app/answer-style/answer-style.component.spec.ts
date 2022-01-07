import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerStyleComponent } from './answer-style.component';

describe('AnswerStyleComponent', () => {
  let component: AnswerStyleComponent;
  let fixture: ComponentFixture<AnswerStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

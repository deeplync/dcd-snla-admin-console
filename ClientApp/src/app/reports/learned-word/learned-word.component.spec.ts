import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnedWordComponent } from './learned-word.component';

describe('LearnedWordComponent', () => {
  let component: LearnedWordComponent;
  let fixture: ComponentFixture<LearnedWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnedWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnedWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

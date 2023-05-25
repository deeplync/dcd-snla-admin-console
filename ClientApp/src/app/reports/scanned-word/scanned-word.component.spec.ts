import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannedWordComponent } from './scanned-word.component';

describe('ScannedWordComponent', () => {
  let component: ScannedWordComponent;
  let fixture: ComponentFixture<ScannedWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannedWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannedWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

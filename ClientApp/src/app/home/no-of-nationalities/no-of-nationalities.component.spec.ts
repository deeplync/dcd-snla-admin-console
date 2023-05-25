import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfNationalitiesComponent } from './no-of-nationalities.component';

describe('NoOfNationalitiesComponent', () => {
  let component: NoOfNationalitiesComponent;
  let fixture: ComponentFixture<NoOfNationalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOfNationalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfNationalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

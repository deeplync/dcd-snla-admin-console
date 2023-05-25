import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfRegistrationComponent } from './no-of-registration.component';

describe('NoOfRegistrationComponent', () => {
  let component: NoOfRegistrationComponent;
  let fixture: ComponentFixture<NoOfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOfRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

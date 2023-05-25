import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfActiveUserComponent } from './no-of-active-user.component';

describe('NoOfActiveUserComponent', () => {
  let component: NoOfActiveUserComponent;
  let fixture: ComponentFixture<NoOfActiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOfActiveUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfActiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

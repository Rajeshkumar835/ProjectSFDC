import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewOwnLeaveInfoComponent } from './employee-view-own-leave-info.component';

describe('EmployeeViewOwnLeaveInfoComponent', () => {
  let component: EmployeeViewOwnLeaveInfoComponent;
  let fixture: ComponentFixture<EmployeeViewOwnLeaveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewOwnLeaveInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewOwnLeaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

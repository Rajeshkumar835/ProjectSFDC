import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApplyLeaveInfoComponent } from './employee-apply-leave-info.component';

describe('EmployeeApplyLeaveInfoComponent', () => {
  let component: EmployeeApplyLeaveInfoComponent;
  let fixture: ComponentFixture<EmployeeApplyLeaveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeApplyLeaveInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeApplyLeaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

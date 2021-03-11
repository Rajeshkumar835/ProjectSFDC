import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetAdminComponent } from './timesheet-admin.component';

describe('TimesheetAdminComponent', () => {
  let component: TimesheetAdminComponent;
  let fixture: ComponentFixture<TimesheetAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetapprovedComponent } from './timesheetapproved.component';

describe('TimesheetapprovedComponent', () => {
  let component: TimesheetapprovedComponent;
  let fixture: ComponentFixture<TimesheetapprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetapprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

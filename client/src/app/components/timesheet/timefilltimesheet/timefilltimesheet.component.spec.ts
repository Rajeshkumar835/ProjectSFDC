import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimefilltimesheetComponent } from './timefilltimesheet.component';

describe('TimefilltimesheetComponent', () => {
  let component: TimefilltimesheetComponent;
  let fixture: ComponentFixture<TimefilltimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimefilltimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimefilltimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerViewEmployeeLeaveInfoComponent } from './manger-view-employee-leave-info.component';

describe('MangerViewEmployeeLeaveInfoComponent', () => {
  let component: MangerViewEmployeeLeaveInfoComponent;
  let fixture: ComponentFixture<MangerViewEmployeeLeaveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerViewEmployeeLeaveInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerViewEmployeeLeaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMasterInfoComponent } from './employee-master-info.component';

describe('EmployeeMasterInfoComponent', () => {
  let component: EmployeeMasterInfoComponent;
  let fixture: ComponentFixture<EmployeeMasterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMasterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMasterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

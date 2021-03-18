import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfoAddComponent } from './employee-info-add.component';

describe('EmployeeInfoAddComponent', () => {
  let component: EmployeeInfoAddComponent;
  let fixture: ComponentFixture<EmployeeInfoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInfoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

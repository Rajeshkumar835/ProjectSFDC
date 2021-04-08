import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHolidayModalComponent } from './company-holiday-modal.component';

describe('CompanyHolidayModalComponent', () => {
  let component: CompanyHolidayModalComponent;
  let fixture: ComponentFixture<CompanyHolidayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyHolidayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyHolidayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

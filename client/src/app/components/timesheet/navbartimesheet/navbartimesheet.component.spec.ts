import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartimesheetComponent } from './navbartimesheet.component';

describe('NavbartimesheetComponent', () => {
  let component: NavbartimesheetComponent;
  let fixture: ComponentFixture<NavbartimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbartimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbartimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

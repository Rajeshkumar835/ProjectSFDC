import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLeaveComponent } from './navbar-leave.component';

describe('NavbarLeaveComponent', () => {
  let component: NavbarLeaveComponent;
  let fixture: ComponentFixture<NavbarLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

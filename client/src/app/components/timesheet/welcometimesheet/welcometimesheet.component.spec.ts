import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometimesheetComponent } from './welcometimesheet.component';

describe('WelcometimesheetComponent', () => {
  let component: WelcometimesheetComponent;
  let fixture: ComponentFixture<WelcometimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcometimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcometimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

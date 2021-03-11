import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsLandingScreenComponent } from './lms-landing-screen.component';

describe('LmsLandingScreenComponent', () => {
  let component: LmsLandingScreenComponent;
  let fixture: ComponentFixture<LmsLandingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsLandingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsLandingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

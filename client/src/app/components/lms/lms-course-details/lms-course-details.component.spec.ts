import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsCourseDetailsComponent } from './lms-course-details.component';

describe('LmsCourseDetailsComponent', () => {
  let component: LmsCourseDetailsComponent;
  let fixture: ComponentFixture<LmsCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

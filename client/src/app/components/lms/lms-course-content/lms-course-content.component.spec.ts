import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsCourseContentComponent } from './lms-course-content.component';

describe('LmsCourseContentComponent', () => {
  let component: LmsCourseContentComponent;
  let fixture: ComponentFixture<LmsCourseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsCourseContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

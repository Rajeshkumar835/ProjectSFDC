import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCoursesComponent } from './favourite-courses.component';

describe('FavouriteCoursesComponent', () => {
  let component: FavouriteCoursesComponent;
  let fixture: ComponentFixture<FavouriteCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

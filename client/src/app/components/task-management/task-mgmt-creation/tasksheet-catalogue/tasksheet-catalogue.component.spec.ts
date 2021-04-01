import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksheetCatalogueComponent } from './tasksheet-catalogue.component';

describe('TasksheetCatalogueComponent', () => {
  let component: TasksheetCatalogueComponent;
  let fixture: ComponentFixture<TasksheetCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksheetCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksheetCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

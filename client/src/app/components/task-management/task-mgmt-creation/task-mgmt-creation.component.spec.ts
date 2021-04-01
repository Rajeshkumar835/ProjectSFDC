import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMgmtCreationComponent } from './task-mgmt-creation.component';

describe('TaskMgmtCreationComponent', () => {
  let component: TaskMgmtCreationComponent;
  let fixture: ComponentFixture<TaskMgmtCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskMgmtCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMgmtCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

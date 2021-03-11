import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertimesheetComponent } from './footertimesheet.component';

describe('FootertimesheetComponent', () => {
  let component: FootertimesheetComponent;
  let fixture: ComponentFixture<FootertimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootertimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootertimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

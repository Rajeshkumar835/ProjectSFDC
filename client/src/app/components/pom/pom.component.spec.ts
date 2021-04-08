import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POMComponent } from './pom.component';

describe('POMComponent', () => {
  let component: POMComponent;
  let fixture: ComponentFixture<POMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

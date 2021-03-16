import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMasterDataComponent } from './admin-master-data.component';

describe('AdminMasterDataComponent', () => {
  let component: AdminMasterDataComponent;
  let fixture: ComponentFixture<AdminMasterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMasterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

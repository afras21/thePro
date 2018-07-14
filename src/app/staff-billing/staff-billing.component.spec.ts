import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBillingComponent } from './staff-billing.component';

describe('StaffBillingComponent', () => {
  let component: StaffBillingComponent;
  let fixture: ComponentFixture<StaffBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

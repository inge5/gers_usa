import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralManagementPoliciesComponent } from './integral-management-policies.component';

describe('IntegralManagementPoliciesComponent', () => {
  let component: IntegralManagementPoliciesComponent;
  let fixture: ComponentFixture<IntegralManagementPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralManagementPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralManagementPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

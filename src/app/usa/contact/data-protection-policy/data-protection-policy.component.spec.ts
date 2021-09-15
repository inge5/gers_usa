import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtectionPolicyComponent } from './data-protection-policy.component';

describe('DataProtectionPolicyComponent', () => {
  let component: DataProtectionPolicyComponent;
  let fixture: ComponentFixture<DataProtectionPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProtectionPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProtectionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

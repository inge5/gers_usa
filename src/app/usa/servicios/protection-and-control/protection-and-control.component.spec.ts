import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionAndControlComponent } from './protection-and-control.component';

describe('ProtectionAndControlComponent', () => {
  let component: ProtectionAndControlComponent;
  let fixture: ComponentFixture<ProtectionAndControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionAndControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionAndControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

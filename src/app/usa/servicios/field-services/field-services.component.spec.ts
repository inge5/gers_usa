import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldServicesComponent } from './field-services.component';

describe('FieldServicesComponent', () => {
  let component: FieldServicesComponent;
  let fixture: ComponentFixture<FieldServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

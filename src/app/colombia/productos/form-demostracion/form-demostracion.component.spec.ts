import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemostracionComponent } from './form-demostracion.component';

describe('FormDemostracionComponent', () => {
  let component: FormDemostracionComponent;
  let fixture: ComponentFixture<FormDemostracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemostracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemostracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

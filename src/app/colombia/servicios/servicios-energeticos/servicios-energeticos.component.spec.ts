import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEnergeticosComponent } from './servicios-energeticos.component';

describe('ServiciosEnergeticosComponent', () => {
  let component: ServiciosEnergeticosComponent;
  let fixture: ComponentFixture<ServiciosEnergeticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosEnergeticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosEnergeticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

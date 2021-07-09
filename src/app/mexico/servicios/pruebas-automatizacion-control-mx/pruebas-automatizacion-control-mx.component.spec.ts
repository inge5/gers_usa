import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasAutomatizacionControlMxComponent } from './pruebas-automatizacion-control-mx.component';

describe('PruebasAutomatizacionControlMxComponent', () => {
  let component: PruebasAutomatizacionControlMxComponent;
  let fixture: ComponentFixture<PruebasAutomatizacionControlMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasAutomatizacionControlMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasAutomatizacionControlMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

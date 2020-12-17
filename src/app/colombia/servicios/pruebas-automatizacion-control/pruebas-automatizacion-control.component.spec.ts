import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasAutomatizacionControlComponent } from './pruebas-automatizacion-control.component';

describe('PruebasAutomatizacionControlComponent', () => {
  let component: PruebasAutomatizacionControlComponent;
  let fixture: ComponentFixture<PruebasAutomatizacionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasAutomatizacionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasAutomatizacionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

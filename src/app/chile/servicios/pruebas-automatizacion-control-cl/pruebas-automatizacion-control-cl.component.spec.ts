import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasAutomatizacionControlClComponent } from './pruebas-automatizacion-control-cl.component';

describe('PruebasAutomatizacionControlClComponent', () => {
  let component: PruebasAutomatizacionControlClComponent;
  let fixture: ComponentFixture<PruebasAutomatizacionControlClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasAutomatizacionControlClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasAutomatizacionControlClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

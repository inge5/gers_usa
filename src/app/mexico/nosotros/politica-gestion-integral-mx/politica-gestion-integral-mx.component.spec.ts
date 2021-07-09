import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaGestionIntegralMxComponent } from './politica-gestion-integral-mx.component';

describe('PoliticaGestionIntegralMxComponent', () => {
  let component: PoliticaGestionIntegralMxComponent;
  let fixture: ComponentFixture<PoliticaGestionIntegralMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaGestionIntegralMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaGestionIntegralMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

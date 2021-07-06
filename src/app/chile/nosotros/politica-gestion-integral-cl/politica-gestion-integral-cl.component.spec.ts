import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaGestionIntegralClComponent } from './politica-gestion-integral-cl.component';

describe('PoliticaGestionIntegralClComponent', () => {
  let component: PoliticaGestionIntegralClComponent;
  let fixture: ComponentFixture<PoliticaGestionIntegralClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaGestionIntegralClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaGestionIntegralClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

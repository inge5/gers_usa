import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaGestionIntegralComponent } from './politica-gestion-integral.component';

describe('PoliticaGestionIntegralComponent', () => {
  let component: PoliticaGestionIntegralComponent;
  let fixture: ComponentFixture<PoliticaGestionIntegralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaGestionIntegralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaGestionIntegralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

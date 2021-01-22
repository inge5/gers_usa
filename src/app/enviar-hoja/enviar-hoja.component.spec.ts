import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarHojaComponent } from './enviar-hoja.component';

describe('EnviarHojaComponent', () => {
  let component: EnviarHojaComponent;
  let fixture: ComponentFixture<EnviarHojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarHojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

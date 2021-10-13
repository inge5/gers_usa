import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCotizadorNeplanUsaComponent } from './form-cotizador-neplan-usa.component';

describe('FormCotizadorNeplanUsaComponent', () => {
  let component: FormCotizadorNeplanUsaComponent;
  let fixture: ComponentFixture<FormCotizadorNeplanUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCotizadorNeplanUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCotizadorNeplanUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

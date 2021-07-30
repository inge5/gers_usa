import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCotizadorNeplanComponent } from './form-cotizador-neplan.component';

describe('FormCotizadorNeplanComponent', () => {
  let component: FormCotizadorNeplanComponent;
  let fixture: ComponentFixture<FormCotizadorNeplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCotizadorNeplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCotizadorNeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

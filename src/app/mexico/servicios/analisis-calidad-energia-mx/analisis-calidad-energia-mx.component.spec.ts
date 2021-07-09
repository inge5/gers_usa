import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisCalidadEnergiaMxComponent } from './analisis-calidad-energia-mx.component';

describe('AnalisisCalidadEnergiaMxComponent', () => {
  let component: AnalisisCalidadEnergiaMxComponent;
  let fixture: ComponentFixture<AnalisisCalidadEnergiaMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisCalidadEnergiaMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisCalidadEnergiaMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

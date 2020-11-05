import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAlcancePaisesComponent } from './seccion-alcance-paises.component';

describe('SeccionAlcancePaisesComponent', () => {
  let component: SeccionAlcancePaisesComponent;
  let fixture: ComponentFixture<SeccionAlcancePaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionAlcancePaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAlcancePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

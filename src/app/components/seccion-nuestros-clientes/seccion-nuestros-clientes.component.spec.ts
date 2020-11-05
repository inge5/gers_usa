import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionNuestrosClientesComponent } from './seccion-nuestros-clientes.component';

describe('SeccionNuestrosClientesComponent', () => {
  let component: SeccionNuestrosClientesComponent;
  let fixture: ComponentFixture<SeccionNuestrosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionNuestrosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionNuestrosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

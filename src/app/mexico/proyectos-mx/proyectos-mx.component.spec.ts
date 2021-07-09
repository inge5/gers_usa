import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosMxComponent } from './proyectos-mx.component';

describe('ProyectosMxComponent', () => {
  let component: ProyectosMxComponent;
  let fixture: ComponentFixture<ProyectosMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

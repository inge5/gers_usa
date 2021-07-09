import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosClComponent } from './proyectos-cl.component';

describe('ProyectosClComponent', () => {
  let component: ProyectosClComponent;
  let fixture: ComponentFixture<ProyectosClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

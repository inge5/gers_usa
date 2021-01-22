import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneacionProyectosComponent } from './planeacion-proyectos.component';

describe('PlaneacionProyectosComponent', () => {
  let component: PlaneacionProyectosComponent;
  let fixture: ComponentFixture<PlaneacionProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneacionProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneacionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

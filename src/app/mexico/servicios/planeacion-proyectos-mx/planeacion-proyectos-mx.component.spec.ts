import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneacionProyectosMxComponent } from './planeacion-proyectos-mx.component';

describe('PlaneacionProyectosMxComponent', () => {
  let component: PlaneacionProyectosMxComponent;
  let fixture: ComponentFixture<PlaneacionProyectosMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneacionProyectosMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneacionProyectosMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

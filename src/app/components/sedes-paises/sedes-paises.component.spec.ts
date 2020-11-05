import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesPaisesComponent } from './sedes-paises.component';

describe('SedesPaisesComponent', () => {
  let component: SedesPaisesComponent;
  let fixture: ComponentFixture<SedesPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedesPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedesPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

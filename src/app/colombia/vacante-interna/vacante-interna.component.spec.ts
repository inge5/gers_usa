import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanteInternaComponent } from './vacante-interna.component';

describe('VacanteInternaComponent', () => {
  let component: VacanteInternaComponent;
  let fixture: ComponentFixture<VacanteInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanteInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanteInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

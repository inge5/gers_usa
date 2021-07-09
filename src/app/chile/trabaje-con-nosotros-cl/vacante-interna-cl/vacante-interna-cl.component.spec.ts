import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanteInternaClComponent } from './vacante-interna-cl.component';

describe('VacanteInternaClComponent', () => {
  let component: VacanteInternaClComponent;
  let fixture: ComponentFixture<VacanteInternaClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanteInternaClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanteInternaClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

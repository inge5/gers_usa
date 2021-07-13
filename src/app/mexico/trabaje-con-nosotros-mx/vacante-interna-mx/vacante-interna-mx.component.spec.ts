import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanteInternaMxComponent } from './vacante-interna-mx.component';

describe('VacanteInternaMxComponent', () => {
  let component: VacanteInternaMxComponent;
  let fixture: ComponentFixture<VacanteInternaMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanteInternaMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanteInternaMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

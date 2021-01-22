import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventoriasAsesoriasComponent } from './interventorias-asesorias.component';

describe('InterventoriasAsesoriasComponent', () => {
  let component: InterventoriasAsesoriasComponent;
  let fixture: ComponentFixture<InterventoriasAsesoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventoriasAsesoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventoriasAsesoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

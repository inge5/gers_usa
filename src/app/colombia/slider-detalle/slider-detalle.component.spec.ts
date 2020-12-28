import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDetalleComponent } from './slider-detalle.component';

describe('SliderDetalleComponent', () => {
  let component: SliderDetalleComponent;
  let fixture: ComponentFixture<SliderDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

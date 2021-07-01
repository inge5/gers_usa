import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaCapacitacionComponent } from './interna-capacitacion.component';

describe('InternaCapacitacionComponent', () => {
  let component: InternaCapacitacionComponent;
  let fixture: ComponentFixture<InternaCapacitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternaCapacitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaCapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

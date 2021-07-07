import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaCapacitacionMexicoComponent } from './interna-capacitacion-mexico.component';

describe('InternaCapacitacionMexicoComponent', () => {
  let component: InternaCapacitacionMexicoComponent;
  let fixture: ComponentFixture<InternaCapacitacionMexicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternaCapacitacionMexicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaCapacitacionMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionMexicoComponent } from './capacitacion-mexico.component';

describe('CapacitacionMexicoComponent', () => {
  let component: CapacitacionMexicoComponent;
  let fixture: ComponentFixture<CapacitacionMexicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionMexicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

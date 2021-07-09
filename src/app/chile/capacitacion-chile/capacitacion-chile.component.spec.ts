import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionChileComponent } from './capacitacion-chile.component';

describe('CapacitacionChileComponent', () => {
  let component: CapacitacionChileComponent;
  let fixture: ComponentFixture<CapacitacionChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaCapacitacionChileComponent } from './interna-capacitacion-chile.component';

describe('InternaCapacitacionChileComponent', () => {
  let component: InternaCapacitacionChileComponent;
  let fixture: ComponentFixture<InternaCapacitacionChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternaCapacitacionChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaCapacitacionChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

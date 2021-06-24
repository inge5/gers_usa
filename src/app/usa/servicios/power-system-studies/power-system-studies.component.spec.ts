import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSystemStudiesComponent } from './power-system-studies.component';

describe('PowerSystemStudiesComponent', () => {
  let component: PowerSystemStudiesComponent;
  let fixture: ComponentFixture<PowerSystemStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSystemStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSystemStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

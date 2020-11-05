import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselmarcasComponent } from './carouselmarcas.component';

describe('CarouselmarcasComponent', () => {
  let component: CarouselmarcasComponent;
  let fixture: ComponentFixture<CarouselmarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselmarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselmarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

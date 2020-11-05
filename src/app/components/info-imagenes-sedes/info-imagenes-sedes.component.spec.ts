import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImagenesSedesComponent } from './info-imagenes-sedes.component';

describe('InfoImagenesSedesComponent', () => {
  let component: InfoImagenesSedesComponent;
  let fixture: ComponentFixture<InfoImagenesSedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoImagenesSedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoImagenesSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

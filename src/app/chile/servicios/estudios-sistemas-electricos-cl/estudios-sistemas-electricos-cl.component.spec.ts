import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosSistemasElectricosClComponent } from './estudios-sistemas-electricos-cl.component';

describe('EstudiosSistemasElectricosClComponent', () => {
  let component: EstudiosSistemasElectricosClComponent;
  let fixture: ComponentFixture<EstudiosSistemasElectricosClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiosSistemasElectricosClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosSistemasElectricosClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

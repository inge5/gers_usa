import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosSistemasComponent } from './estudios-sistemas.component';

describe('EstudiosSistemasComponent', () => {
  let component: EstudiosSistemasComponent;
  let fixture: ComponentFixture<EstudiosSistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiosSistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

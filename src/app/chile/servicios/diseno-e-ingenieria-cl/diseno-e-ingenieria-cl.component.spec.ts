import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoEIngenieriaClComponent } from './diseno-e-ingenieria-cl.component';

describe('DisenoEIngenieriaClComponent', () => {
  let component: DisenoEIngenieriaClComponent;
  let fixture: ComponentFixture<DisenoEIngenieriaClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoEIngenieriaClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoEIngenieriaClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

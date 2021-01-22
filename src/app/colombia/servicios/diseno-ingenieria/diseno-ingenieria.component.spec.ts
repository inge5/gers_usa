import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoIngenieriaComponent } from './diseno-ingenieria.component';

describe('DisenoIngenieriaComponent', () => {
  let component: DisenoIngenieriaComponent;
  let fixture: ComponentFixture<DisenoIngenieriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoIngenieriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoIngenieriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

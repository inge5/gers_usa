import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoIngenieriaMxComponent } from './diseno-ingenieria-mx.component';

describe('DisenoIngenieriaMxComponent', () => {
  let component: DisenoIngenieriaMxComponent;
  let fixture: ComponentFixture<DisenoIngenieriaMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoIngenieriaMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoIngenieriaMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

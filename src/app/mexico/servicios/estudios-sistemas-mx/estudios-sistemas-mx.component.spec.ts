import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosSistemasMxComponent } from './estudios-sistemas-mx.component';

describe('EstudiosSistemasMxComponent', () => {
  let component: EstudiosSistemasMxComponent;
  let fixture: ComponentFixture<EstudiosSistemasMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiosSistemasMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosSistemasMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

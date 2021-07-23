import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorMxComponent } from './buscador-mx.component';

describe('BuscadorMxComponent', () => {
  let component: BuscadorMxComponent;
  let fixture: ComponentFixture<BuscadorMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

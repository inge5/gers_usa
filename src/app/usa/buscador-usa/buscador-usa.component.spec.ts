import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorUsaComponent } from './buscador-usa.component';

describe('BuscadorUsaComponent', () => {
  let component: BuscadorUsaComponent;
  let fixture: ComponentFixture<BuscadorUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

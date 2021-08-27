import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorClComponent } from './buscador-cl.component';

describe('BuscadorClComponent', () => {
  let component: BuscadorClComponent;
  let fixture: ComponentFixture<BuscadorClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

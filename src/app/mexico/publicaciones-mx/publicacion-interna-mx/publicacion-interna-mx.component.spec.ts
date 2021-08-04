import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionInternaMxComponent } from './publicacion-interna-mx.component';

describe('PublicacionInternaMxComponent', () => {
  let component: PublicacionInternaMxComponent;
  let fixture: ComponentFixture<PublicacionInternaMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionInternaMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionInternaMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesMxComponent } from './publicaciones-mx.component';

describe('PublicacionesMxComponent', () => {
  let component: PublicacionesMxComponent;
  let fixture: ComponentFixture<PublicacionesMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesClComponent } from './publicaciones-cl.component';

describe('PublicacionesClComponent', () => {
  let component: PublicacionesClComponent;
  let fixture: ComponentFixture<PublicacionesClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

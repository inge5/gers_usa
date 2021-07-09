import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionInternaClComponent } from './publicacion-interna-cl.component';

describe('PublicacionInternaClComponent', () => {
  let component: PublicacionInternaClComponent;
  let fixture: ComponentFixture<PublicacionInternaClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionInternaClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionInternaClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

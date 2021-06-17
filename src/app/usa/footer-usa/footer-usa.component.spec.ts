import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUsaComponent } from './footer-usa.component';

describe('FooterUsaComponent', () => {
  let component: FooterUsaComponent;
  let fixture: ComponentFixture<FooterUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

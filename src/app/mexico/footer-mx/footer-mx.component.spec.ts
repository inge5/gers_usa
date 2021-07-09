import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMxComponent } from './footer-mx.component';

describe('FooterMxComponent', () => {
  let component: FooterMxComponent;
  let fixture: ComponentFixture<FooterMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

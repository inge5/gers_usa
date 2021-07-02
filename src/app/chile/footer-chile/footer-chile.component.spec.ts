import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterChileComponent } from './footer-chile.component';

describe('FooterChileComponent', () => {
  let component: FooterChileComponent;
  let fixture: ComponentFixture<FooterChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

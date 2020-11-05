import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncimaBannerComponent } from './encima-banner.component';

describe('EncimaBannerComponent', () => {
  let component: EncimaBannerComponent;
  let fixture: ComponentFixture<EncimaBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncimaBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncimaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersPrincipalesComponent } from './banners-principales.component';

describe('BannersPrincipalesComponent', () => {
  let component: BannersPrincipalesComponent;
  let fixture: ComponentFixture<BannersPrincipalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersPrincipalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

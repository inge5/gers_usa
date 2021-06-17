import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsaComponent } from './home-usa.component';

describe('HomeUsaComponent', () => {
  let component: HomeUsaComponent;
  let fixture: ComponentFixture<HomeUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClComponent } from './home-cl.component';

describe('HomeClComponent', () => {
  let component: HomeClComponent;
  let fixture: ComponentFixture<HomeClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

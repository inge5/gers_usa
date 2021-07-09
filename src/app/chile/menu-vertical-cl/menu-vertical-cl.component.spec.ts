import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalClComponent } from './menu-vertical-cl.component';

describe('MenuVerticalClComponent', () => {
  let component: MenuVerticalClComponent;
  let fixture: ComponentFixture<MenuVerticalClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVerticalClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

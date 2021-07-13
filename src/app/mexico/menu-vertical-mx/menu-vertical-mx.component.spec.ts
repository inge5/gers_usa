import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalMxComponent } from './menu-vertical-mx.component';

describe('MenuVerticalMxComponent', () => {
  let component: MenuVerticalMxComponent;
  let fixture: ComponentFixture<MenuVerticalMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVerticalMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

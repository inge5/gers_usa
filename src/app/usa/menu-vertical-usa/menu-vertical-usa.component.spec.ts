import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalUsaComponent } from './menu-vertical-usa.component';

describe('MenuVerticalUsaComponent', () => {
  let component: MenuVerticalUsaComponent;
  let fixture: ComponentFixture<MenuVerticalUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVerticalUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

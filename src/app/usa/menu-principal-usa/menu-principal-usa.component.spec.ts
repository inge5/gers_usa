import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalUsaComponent } from './menu-principal-usa.component';

describe('MenuPrincipalUsaComponent', () => {
  let component: MenuPrincipalUsaComponent;
  let fixture: ComponentFixture<MenuPrincipalUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipalUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

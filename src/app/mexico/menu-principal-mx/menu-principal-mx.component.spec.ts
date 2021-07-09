import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalMxComponent } from './menu-principal-mx.component';

describe('MenuPrincipalMxComponent', () => {
  let component: MenuPrincipalMxComponent;
  let fixture: ComponentFixture<MenuPrincipalMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipalMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

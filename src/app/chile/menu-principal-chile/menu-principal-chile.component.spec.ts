import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalChileComponent } from './menu-principal-chile.component';

describe('MenuPrincipalChileComponent', () => {
  let component: MenuPrincipalChileComponent;
  let fixture: ComponentFixture<MenuPrincipalChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipalChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

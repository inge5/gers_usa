import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresCompromisosComponent } from './tres-compromisos.component';

describe('TresCompromisosComponent', () => {
  let component: TresCompromisosComponent;
  let fixture: ComponentFixture<TresCompromisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresCompromisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresCompromisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

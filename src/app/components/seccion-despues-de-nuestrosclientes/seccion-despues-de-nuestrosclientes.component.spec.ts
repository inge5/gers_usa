import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDespuesDeNuestrosclientesComponent } from './seccion-despues-de-nuestrosclientes.component';

describe('SeccionDespuesDeNuestrosclientesComponent', () => {
  let component: SeccionDespuesDeNuestrosclientesComponent;
  let fixture: ComponentFixture<SeccionDespuesDeNuestrosclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionDespuesDeNuestrosclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionDespuesDeNuestrosclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

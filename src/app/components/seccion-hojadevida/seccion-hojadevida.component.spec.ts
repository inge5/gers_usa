import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionHojadevidaComponent } from './seccion-hojadevida.component';

describe('SeccionHojadevidaComponent', () => {
  let component: SeccionHojadevidaComponent;
  let fixture: ComponentFixture<SeccionHojadevidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionHojadevidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionHojadevidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

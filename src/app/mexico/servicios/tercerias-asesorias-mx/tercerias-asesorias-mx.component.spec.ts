import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceriasAsesoriasMxComponent } from './tercerias-asesorias-mx.component';

describe('TerceriasAsesoriasMxComponent', () => {
  let component: TerceriasAsesoriasMxComponent;
  let fixture: ComponentFixture<TerceriasAsesoriasMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceriasAsesoriasMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceriasAsesoriasMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

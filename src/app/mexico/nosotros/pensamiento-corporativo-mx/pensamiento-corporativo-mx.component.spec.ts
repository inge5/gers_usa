import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamientoCorporativoMxComponent } from './pensamiento-corporativo-mx.component';

describe('PensamientoCorporativoMxComponent', () => {
  let component: PensamientoCorporativoMxComponent;
  let fixture: ComponentFixture<PensamientoCorporativoMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensamientoCorporativoMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensamientoCorporativoMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

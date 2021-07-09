import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamientoCorporativoClComponent } from './pensamiento-corporativo-cl.component';

describe('PensamientoCorporativoClComponent', () => {
  let component: PensamientoCorporativoClComponent;
  let fixture: ComponentFixture<PensamientoCorporativoClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensamientoCorporativoClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensamientoCorporativoClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

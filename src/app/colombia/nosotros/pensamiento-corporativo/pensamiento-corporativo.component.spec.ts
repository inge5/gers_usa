import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamientoCorporativoComponent } from './pensamiento-corporativo.component';

describe('PensamientoCorporativoComponent', () => {
  let component: PensamientoCorporativoComponent;
  let fixture: ComponentFixture<PensamientoCorporativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensamientoCorporativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensamientoCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

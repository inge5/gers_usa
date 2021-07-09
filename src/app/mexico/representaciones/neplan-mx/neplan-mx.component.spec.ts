import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeplanMxComponent } from './neplan-mx.component';

describe('NeplanMxComponent', () => {
  let component: NeplanMxComponent;
  let fixture: ComponentFixture<NeplanMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeplanMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeplanMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

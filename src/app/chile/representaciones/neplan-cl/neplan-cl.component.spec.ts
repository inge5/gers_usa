import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeplanClComponent } from './neplan-cl.component';

describe('NeplanClComponent', () => {
  let component: NeplanClComponent;
  let fixture: ComponentFixture<NeplanClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeplanClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeplanClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeplanComponent } from './neplan.component';

describe('NeplanComponent', () => {
  let component: NeplanComponent;
  let fixture: ComponentFixture<NeplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeplanUsaComponent } from './neplan-usa.component';

describe('NeplanUsaComponent', () => {
  let component: NeplanUsaComponent;
  let fixture: ComponentFixture<NeplanUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeplanUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeplanUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossenMetrawattComponent } from './gossen-metrawatt.component';

describe('GossenMetrawattComponent', () => {
  let component: GossenMetrawattComponent;
  let fixture: ComponentFixture<GossenMetrawattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossenMetrawattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossenMetrawattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

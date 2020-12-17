import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XgslabComponent } from './xgslab.component';

describe('XgslabComponent', () => {
  let component: XgslabComponent;
  let fixture: ComponentFixture<XgslabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XgslabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XgslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

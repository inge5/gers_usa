import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XgslabClComponent } from './xgslab-cl.component';

describe('XgslabClComponent', () => {
  let component: XgslabClComponent;
  let fixture: ComponentFixture<XgslabClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XgslabClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XgslabClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

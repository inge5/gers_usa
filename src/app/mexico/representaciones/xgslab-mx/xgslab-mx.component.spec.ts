import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XgslabMxComponent } from './xgslab-mx.component';

describe('XgslabMxComponent', () => {
  let component: XgslabMxComponent;
  let fixture: ComponentFixture<XgslabMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XgslabMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XgslabMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

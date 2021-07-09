import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGridsMxComponent } from './smart-grids-mx.component';

describe('SmartGridsMxComponent', () => {
  let component: SmartGridsMxComponent;
  let fixture: ComponentFixture<SmartGridsMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartGridsMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartGridsMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdbComponent } from './ndb.component';

describe('NdbComponent', () => {
  let component: NdbComponent;
  let fixture: ComponentFixture<NdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

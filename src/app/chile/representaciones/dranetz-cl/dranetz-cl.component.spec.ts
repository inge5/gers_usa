import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DranetzClComponent } from './dranetz-cl.component';

describe('DranetzClComponent', () => {
  let component: DranetzClComponent;
  let fixture: ComponentFixture<DranetzClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DranetzClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DranetzClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

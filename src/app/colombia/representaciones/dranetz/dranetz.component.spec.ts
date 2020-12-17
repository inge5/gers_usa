import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DranetzComponent } from './dranetz.component';

describe('DranetzComponent', () => {
  let component: DranetzComponent;
  let fixture: ComponentFixture<DranetzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DranetzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DranetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

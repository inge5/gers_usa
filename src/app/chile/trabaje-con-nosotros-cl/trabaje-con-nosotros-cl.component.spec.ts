import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajeConNosotrosClComponent } from './trabaje-con-nosotros-cl.component';

describe('TrabajeConNosotrosClComponent', () => {
  let component: TrabajeConNosotrosClComponent;
  let fixture: ComponentFixture<TrabajeConNosotrosClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajeConNosotrosClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajeConNosotrosClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajeConNosotrosComponent } from './trabaje-con-nosotros.component';

describe('TrabajeConNosotrosComponent', () => {
  let component: TrabajeConNosotrosComponent;
  let fixture: ComponentFixture<TrabajeConNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajeConNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajeConNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

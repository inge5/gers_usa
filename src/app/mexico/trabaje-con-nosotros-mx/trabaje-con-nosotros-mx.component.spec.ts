import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajeConNosotrosMxComponent } from './trabaje-con-nosotros-mx.component';

describe('TrabajeConNosotrosMxComponent', () => {
  let component: TrabajeConNosotrosMxComponent;
  let fixture: ComponentFixture<TrabajeConNosotrosMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajeConNosotrosMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajeConNosotrosMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

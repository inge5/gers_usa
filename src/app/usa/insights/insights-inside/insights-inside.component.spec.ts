import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsInsideComponent } from './insights-inside.component';

describe('InsightsInsideComponent', () => {
  let component: InsightsInsideComponent;
  let fixture: ComponentFixture<InsightsInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

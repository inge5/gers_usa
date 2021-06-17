import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateThinkingComponent } from './corporate-thinking.component';

describe('CorporateThinkingComponent', () => {
  let component: CorporateThinkingComponent;
  let fixture: ComponentFixture<CorporateThinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateThinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

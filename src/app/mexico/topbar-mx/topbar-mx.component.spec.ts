import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarMxComponent } from './topbar-mx.component';

describe('TopbarMxComponent', () => {
  let component: TopbarMxComponent;
  let fixture: ComponentFixture<TopbarMxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarMxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

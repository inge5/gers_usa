import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarChileComponent } from './topbar-chile.component';

describe('TopbarChileComponent', () => {
  let component: TopbarChileComponent;
  let fixture: ComponentFixture<TopbarChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenFullIntermedioComponent } from './imagen-full-intermedio.component';

describe('ImagenFullIntermedioComponent', () => {
  let component: ImagenFullIntermedioComponent;
  let fixture: ComponentFixture<ImagenFullIntermedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenFullIntermedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenFullIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

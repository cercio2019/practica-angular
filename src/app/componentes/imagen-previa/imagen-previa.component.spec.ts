import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPreviaComponent } from './imagen-previa.component';

describe('ImagenPreviaComponent', () => {
  let component: ImagenPreviaComponent;
  let fixture: ComponentFixture<ImagenPreviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenPreviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

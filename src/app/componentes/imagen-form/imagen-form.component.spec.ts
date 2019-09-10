import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenFormComponent } from './imagen-form.component';

describe('ImagenFormComponent', () => {
  let component: ImagenFormComponent;
  let fixture: ComponentFixture<ImagenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

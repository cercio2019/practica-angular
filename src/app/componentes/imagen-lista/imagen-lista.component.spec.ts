import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenListaComponent } from './imagen-lista.component';

describe('ImagenListaComponent', () => {
  let component: ImagenListaComponent;
  let fixture: ComponentFixture<ImagenListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

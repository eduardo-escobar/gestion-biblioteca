import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosTarjetaComponent } from './libros-tarjeta.component';

describe('LibrosTarjetaComponent', () => {
  let component: LibrosTarjetaComponent;
  let fixture: ComponentFixture<LibrosTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

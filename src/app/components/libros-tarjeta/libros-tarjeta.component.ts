import { Component, OnInit, Input } from '@angular/core';
import { Libro } from 'src/app/services/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros-tarjeta',
  templateUrl: './libros-tarjeta.component.html',
  styleUrls: ['./libros-tarjeta.component.scss']
})
export class LibrosTarjetaComponent implements OnInit {

  @Input() libros: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  verDetalle = (libro: Libro, i: number) => {
    this.router.navigate(['libro', libro.idx ? libro.idx : i]);
  }

}

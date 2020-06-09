import { Component, OnInit } from '@angular/core';
import { LibrosService, Libro } from 'src/app/services/libros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  libros: Libro[] = [];
  constructor(private servicioLibros: LibrosService) {
    this.libros = this.servicioLibros.getAllBooks();
  }

  ngOnInit(): void {
  }

}

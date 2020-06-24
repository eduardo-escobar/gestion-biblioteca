import { Component, OnInit } from '@angular/core';
import { LibrosService, Libro } from 'src/app/services/libros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  libros: any[] = [];
  constructor(private servicioLibros: LibrosService) {
    this.servicioLibros.getTopBooks()
      .subscribe((lb: any) => { this.libros = lb; }, (error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

  getLibros() {

  }
}

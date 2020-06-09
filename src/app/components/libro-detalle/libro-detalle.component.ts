import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService, Libro } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.scss']
})
export class LibroDetalleComponent implements OnInit {

  libro: Libro;
  constructor(private activatedRouter: ActivatedRoute,
              private libroServicio: LibrosService) {
    this.activatedRouter.params.subscribe(param => {
      console.log('Hola Mundo');
      this.libro = this.libroServicio.getBook(param['id']);
    });
  }

  ngOnInit(): void {
  }

}

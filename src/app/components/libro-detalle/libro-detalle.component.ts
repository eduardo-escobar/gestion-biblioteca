import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService, Libro } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.scss']
})
export class LibroDetalleComponent implements OnInit {

  libros: any[] = [];
  constructor(private activatedRouter: ActivatedRoute,
              private libroServicio: LibrosService) {
    this.activatedRouter.params.subscribe(param => {
      this.libroServicio.getBook(param['id'])
                       .subscribe(lb => this.libros = lb);
    });
  }

  ngOnInit(): void {
  }

}

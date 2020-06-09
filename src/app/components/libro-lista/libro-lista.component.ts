import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService, Libro } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.scss']
})
export class LibroListaComponent implements OnInit {

  libros: Libro[] = [];
  loading: boolean = true;
  busqueda: string = '';

  constructor(private router: ActivatedRoute,
              private librosServicios: LibrosService) {
    this.router.params.subscribe(param => {
      this.loading = true;
      this.busqueda = param['nombre'];
      this.buscarLibro(this.busqueda);
    });
  }

  ngOnInit(): void {
  }
  buscarLibro = (name: string) => {
    setTimeout(() => {
      this.libros = this.librosServicios.getAllBookByName(name);
      this.loading = false;
    }, 100);

  }
}

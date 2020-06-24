import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { LibrosService, Libro } from 'src/app/services/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-libros',
  template: `<form class="form-inline my-2 my-lg-0">
    <ng2-completer (keydown.enter)="buscarLibro($event)" [textNoResults]="false" [placeholder]="'Buscar libro'" name="libroSeleccionado" [inputClass]="['form-control input-list w-100 mr-2']" style="width: 50%;" [(ngModel)]="libroSeleccionado" [datasource]="dataService" [minSearchLength]="3"></ng2-completer>
    <button class="btn btn-outline-secondary my-2 ml-2 my-sm-0" (click)="buscarLibro($event)" >Buscar</button>
</form> `,
  styleUrls: ['./busqueda-libros.component.scss']
})

export class BusquedaLibrosComponent implements OnInit {

  libroSeleccionado = '';
  dataService: CompleterData;
  libros: Libro[] = [];
  constructor(private completerService: CompleterService,
              private servicioLibros: LibrosService,
              private router: Router) {
    this.servicioLibros.getAllBook().subscribe(lb => {
      this.libros = lb;
      this.dataService = completerService.local(this.libros, 'titulo', 'titulo');
      this.libroSeleccionado = '';
    });

  }

  ngOnInit(): void {
  }

  buscarLibro = (e) => {
    if (e.code === 'Enter' || e.type === 'click') {
      if (this.libroSeleccionado.trim().length > 2) {
        this.router.navigate(['/librosLista', this.libroSeleccionado]);
        this.libroSeleccionado = '';
      }
    }
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LibrosService } from './services/libros.service';
import { HomeComponent } from './components/home/home.component';
import { BusquedaLibrosComponent } from './components/busqueda-libros/busqueda-libros.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule } from '@angular/forms';
import { LibroListaComponent } from './components/libro-lista/libro-lista.component';
import { LibrosTarjetaComponent } from './components/libros-tarjeta/libros-tarjeta.component';
import { LoadingComponent } from './components/loading/loading.component';
import { registerLocaleData } from '@angular/common';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaLibrosComponent,
    LibroListaComponent,
    LibrosTarjetaComponent,
    LoadingComponent,
    LibroDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2CompleterModule
  ],
  providers: [LibrosService, {
    provide: LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

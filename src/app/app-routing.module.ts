import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibroListaComponent } from './components/libro-lista/libro-lista.component';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'librosLista/:nombre', component: LibroListaComponent },
  { path: 'libro/:id', component: LibroDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

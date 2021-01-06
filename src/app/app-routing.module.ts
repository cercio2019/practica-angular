import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapboxComponent } from './componentes/mapbox/mapbox.component';
import {UsuariosComponent} from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  
  {path: '', component: UsuariosComponent},
  {path: 'map', component: MapboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

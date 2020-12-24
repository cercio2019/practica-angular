import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {UsuariosComponent} from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  
  {path: '', component: UsuariosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ImagenListaComponent} from './componentes/imagen-lista/imagen-lista.component'
import {ImagenFormComponent} from './componentes/imagen-form/imagen-form.component'
import {ImagenPreviaComponent} from './componentes/imagen-previa/imagen-previa.component'

const routes: Routes = [
  {path: 'imagenes', component: ImagenListaComponent },
  {path: 'imagenes/new', component: ImagenFormComponent},
  {path: 'imagenes/:id', component: ImagenPreviaComponent},
  {path:'', redirectTo:'/imagenes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

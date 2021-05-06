import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormWorkersComponent } from './componentes/form-workers/form-workers.component';
import { MapboxComponent } from './componentes/mapbox/mapbox.component';

const routes: Routes = [
  
  {path: '', component: MapboxComponent},
  {path: 'addUser', component: FormWorkersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

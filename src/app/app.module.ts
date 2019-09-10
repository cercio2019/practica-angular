import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { ImagenFormComponent } from './componentes/imagen-form/imagen-form.component';
import { ImagenPreviaComponent } from './componentes/imagen-previa/imagen-previa.component';
import { ImagenListaComponent } from './componentes/imagen-lista/imagen-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    ImagenFormComponent,
    ImagenPreviaComponent,
    ImagenListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

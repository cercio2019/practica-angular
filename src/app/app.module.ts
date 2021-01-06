import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { MapboxComponent } from './componentes/mapbox/mapbox.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MapboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

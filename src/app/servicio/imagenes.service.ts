import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Imagen} from '../interfaces/imagen'

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  URL = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }

  registrarImagen(nombre:string, descripcion:string, foto:File){
    const datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('descripcion', descripcion);
    datos.append('imagen', foto);
    return this.http.post(`${this.URL}`, datos)
  }

  getImagenes(){
    return this.http.get<Imagen[]>(`${this.URL}`)
  }

  getImagen(id:string){
    return this.http.get<Imagen[]>(`${this.URL}/${id}`)
  }

  editarImagen(id:string, nombre:string, descripcion:string){
    return this.http.put(`${this.URL}/${id}`, {nombre, descripcion})
  }

  eliminarImagen(id:string){
    return this.http.delete(`${this.URL}/${id}`)
  }

}

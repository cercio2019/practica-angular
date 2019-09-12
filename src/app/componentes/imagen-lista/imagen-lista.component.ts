import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ImagenesService} from '../../servicio/imagenes.service';
import {Imagen} from '../../interfaces/imagen';

@Component({
  selector: 'app-imagen-lista',
  templateUrl: './imagen-lista.component.html',
  styleUrls: ['./imagen-lista.component.css']
})
export class ImagenListaComponent implements OnInit {

  listaImagenes: Imagen[] = [];

  constructor(private imagenService: ImagenesService, private router: Router) { }

  ngOnInit() {
    this.imagenService.getImagenes().subscribe(
      res => {
        this.listaImagenes = res;
        console.log(this.listaImagenes)
      },
      err => console.log(err)
    );
  }

  selectImagen(id:string){
    this.router.navigate(['/imagenes', id])
  }

}

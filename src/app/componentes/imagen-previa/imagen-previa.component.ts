import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ImagenesService} from '../../servicio/imagenes.service'
import {Imagen} from '../../interfaces/imagen';

@Component({
  selector: 'app-imagen-previa',
  templateUrl: './imagen-previa.component.html',
  styleUrls: ['./imagen-previa.component.css']
})
export class ImagenPreviaComponent implements OnInit {

  public id:Number;
  imagen =[];

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private imagenService : ImagenesService
      ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params=>{
      this.id = params['id'];
      this.imagenService.getImagen(this.id)
      .subscribe(
        res =>{
          this.imagen = res;
          console.log(this.imagen)
        },
        err => console.log(err)
      )
    })
  }

  deleteImagen(id:string){
    this.imagenService.eliminarImagen(id)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/imagenes']);
      },
      err=>console.log(err)
    )
  }

  updateImagen(nombre:HTMLInputElement, descripcion:HTMLInputElement):Boolean{
    this.imagenService.editarImagen(this.id, nombre.value, descripcion.value)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/imagenes']);
      },
      err => console.log(err)
    )
    return false;
  }

}

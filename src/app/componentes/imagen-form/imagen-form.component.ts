import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {ImagenesService} from '../../servicio/imagenes.service'

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-imagen-form',
  templateUrl: './imagen-form.component.html',
  styleUrls: ['./imagen-form.component.css']
})
export class ImagenFormComponent implements OnInit {

  imageSelect : string | ArrayBuffer;
  file : File;

  constructor(private imagenService:ImagenesService, private router:Router) { }

  ngOnInit() {
  }

  onImageSelect(event: HtmlInputEvent ):void{

    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0]

      const reader = new FileReader();
      reader.onload = e => this.imageSelect = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadImagen(nombre:HTMLInputElement, descripcion:HTMLTextAreaElement){
    
     this.imagenService
     .registrarImagen(nombre.value, descripcion.value, this.file).subscribe(
       res =>{
         console.log(res);
         this.router.navigate(['/imagenes'])
       },
       err => console.log(err)
     );
     return false
  }
}

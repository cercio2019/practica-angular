import { Component, OnInit } from '@angular/core';
import {ImagenesService} from "../../servicio/imagenes.service";
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lista = []; 
  autores = [];
  libreria = [];
  nroActividades:Number = 0;
  nroAutores:Number = 0

  constructor(private imagenservice : ImagenesService) { 
    this.imagenservice.getImagenes().subscribe(
      res => {
      this.lista.push(this.ordenarLista(res));
      this.nroActividades = this.lista[0].length;
      },
      err =>console.log(err)
    )

    this.imagenservice.getAutor().subscribe(
      res =>{
        console.log(res)
        this.autores.push(res);
        this.nroAutores = this.autores[0].length;
        console.log(this.autores);
        this.tablaAutores();
        
      },
      err => console.log(err)
    )


  }

  ngOnInit() {

  }

  ordenarLista(actividades){

    let incompleted = [];
    let completed = [];
    let datos = [];
    actividades.forEach(element => {

        if(element.completed){
          completed.push(element);
        }else{
          incompleted.push(element);
        }
    });

    incompleted.forEach(date =>{
        datos.push(date);
    });

    completed.forEach(date =>{
      datos.push(date);
    });

    return datos;
  }


  tablaAutores(){
    
    this.autores[0].forEach(element => {
      let datos = {nombre: "" , apellido:"", titulo : "", descripcion : "", fechaPublic : "" };
      this.imagenservice.getBookAutor(element.idBook).subscribe(
        res=>{
          let result = [];
          result.push(res);
          datos.nombre = element.firstName;
          datos.apellido = element.lastName;
          datos.titulo = result[0].title;
          datos.descripcion = result[0].description;
          datos.fechaPublic = result[0].publishDate;               
        },
        err => console.log(err)
      );
      this.libreria.push(datos);  
    });

    console.log(this.libreria); 

  }

}

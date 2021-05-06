import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from "mapbox-gl";
import { ContactserviceService } from 'src/app/service/contactservice.service';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {

  mapa : Mapboxgl.map;
  popup : Mapboxgl.Popup;

  contacts : any = []
  constructor( private serverContact : ContactserviceService) {

    this.popup = new Mapboxgl.Popup({
      closeButton : false
    })

   }

  ngOnInit() {

    this.serverContact.getContacts().subscribe(
      res =>{
        this.contacts = res;
        console.log(this.contacts);
      },
      err => console.log(err)
    )

    Mapboxgl.accessToken = environment.mapboxkey; 
      this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.3716374, -33.7579005],
      zoom: 2.5
      });
  }

  mostrarInfo(datos){
    console.log(datos);

    Mapboxgl.accessToken = environment.mapboxkey; 
      this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: datos.contactLocation,
      zoom: 5
      });

    this.popup.setLngLat(datos.contactLocation)
    .setText(
      datos.contact+"-"+datos.contactPhone
    ).addTo(this.mapa)

  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from "mapbox-gl";
@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {

  mapa : Mapboxgl.map;
  popup : Mapboxgl.Popup;

  contacts =[
    {
      contact : "Alex the becerro Alarcon",
      contactEmail : "alexbecerro@gmail.com",
      contactPhone : "54512164854",
      contactNote : "",
      contactTag : "",
      contactLocation : [-71.0039734, -34.5865276]
    },

    {
      contact : "cercio viloria",
      contactEmail : "cercio2015@gmail.com",
      contactPhone : "34535635",
      contactNote : "",
      contactTag : "",
      contactLocation : [-72.6377404, -38.7290173]
    },

    {
      contact : "Angel cogio de alarcon ",
      contactEmail : "angelselomama@gmail.com",
      contactPhone : "85787865434",
      contactNote : "",
      contactTag : "",
      contactLocation : [-71.3716374, -33.7579005]
    }
  ]
  constructor() {

    this.popup = new Mapboxgl.Popup({
      closeButton : false
    })

   }

  ngOnInit() {

    Mapboxgl.accessToken = environment.mapboxkey; 
      this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.3716374, -33.7579005],
      maxZoom: 5,
      minZoom: 1,
      zoom: 3
      });
  }

  mostrarInfo(datos){
    console.log(datos);
    this.popup.setLngLat(datos.contactLocation)
    .setText(
      datos.contact+"-"+datos.contactPhone
    ).addTo(this.mapa)

  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from "mapbox-gl";
import { LocationsService } from 'src/app/service/locations.service';
import { ContactserviceService } from 'src/app/service/contactservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-workers',
  templateUrl: './form-workers.component.html',
  styleUrls: ['./form-workers.component.css']
})
export class FormWorkersComponent implements OnInit {

  mapa : Mapboxgl.map;

  contact = {
      contact : "",
      contactEmail : "",
      contactPhone : "", 
      contactLocation : 0
  }

  locations : any = [];

  location : any = [];

  constructor(
    private locationService : LocationsService,
    private contactService : ContactserviceService,
    private router : Router
    ) { }

  ngOnInit() {

    this.locationService.getLocations().subscribe(
      res=>{
        this.locations = res;
        console.log(this.locations);
      },
      err => console.log(err)
    )


    Mapboxgl.accessToken = environment.mapboxkey; 
    this.mapa = new Mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-67.0304514, 10.4683612],
    zoom: 4
    });
  }

  changeMapbox = () =>{

    this.locationService.getLocation(this.contact.contactLocation).subscribe(
      res=>{
        this.location = res;
        console.log(this.location);
        Mapboxgl.accessToken = environment.mapboxkey; 
        this.mapa = new Mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.location[0].lat_long,
        zoom: 5
        });
      },
      err => console.log(err)
    );
  }

  saveWorker = () =>{

    this.contact = {
      ... this.contact,
      contactLocation : this.location[0].lat_long
    }
    console.log(this.contact);

    if(confirm("Desea guadar a "+this.contact.contact+" en el sistema")){
      this.contactService.postContact(this.contact).subscribe(
        res=>{
          alert(this.contact.contact+" ha sido registrado en el sistema");
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
    }else{
      this.contact = {
        contact : "",
        contactEmail : "",
        contactPhone : "", 
        contactLocation : 0
      }
    }

  }

}

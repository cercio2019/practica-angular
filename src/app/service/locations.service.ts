import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  url = "http://localhost:3000/locations";
  constructor(private http : HttpClient) { }

  getLocations = () =>{
    return this.http.get(this.url);
  }

  getLocation = (id) =>{
    return this.http.get(this.url+'/'+id);
  }

}

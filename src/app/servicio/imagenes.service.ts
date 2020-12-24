import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  URL = 'http://fakerestapi.azurewebsites.net/api/v1';

  constructor(private http : HttpClient) { }


  getImagenes(){
    return this.http.get(`${this.URL}/Activities`);
  }

  getAutor(){
    return this.http.get(`${this.URL}/Authors`);
  }

  getBookAutor(id:String | Number ){
    return this.http.get(`${this.URL}/Books/${id}`);
  }
  

}

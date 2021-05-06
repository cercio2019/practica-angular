import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  url = "http://localhost:3000"

  constructor(private http : HttpClient) { }

  getContacts = () =>{
    return this.http.get(this.url+"/contacts");
  }

  getContact = (id:String | Number) => {
    return this.http.get(this.url+"/contacts/"+id);
  }

  postContact = (datos:Object) =>{
    return this.http.post(this.url+"/addContact", datos);
  }

}

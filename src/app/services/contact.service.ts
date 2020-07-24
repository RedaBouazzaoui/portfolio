import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
   backEndUrlSave: string="http://localhost:8088/contacts"
   backEndUrlSendMessage: string="http://localhost:8088/contactez-moi"

  constructor(private http:HttpClient) { }

  findAll(){
return this.http.get<Contact[]>(this.backEndUrlSave);

  }
  save(contact){
       return this.http.post<any>(this.backEndUrlSave,contact);

  }
  sendMessage(contact){

    return this.http.post(this.backEndUrlSendMessage,contact);
  }

}

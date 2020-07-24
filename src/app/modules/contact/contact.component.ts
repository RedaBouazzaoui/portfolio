import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  cont: FormGroup;
 
  // dependency injection 
  constructor(private contactServise: ContactService,private ct: FormBuilder) { }

  ngOnInit() {
    this.resetContact();
   }

    resetContact(){ 
      // Create an instance of FormGroup
    this.cont = this.ct.group({ 
      // Create the instances of FormControl    
      name: ['',Validators.required],                   
      email: ['',Validators.required], 
      telephon: [],
      subject: [],
      message:[],                 
    });

    }

  sendMessage() {
    //send tow emails one to contact and one to admin
  if(this.contactServise.sendMessage(this.cont.value).subscribe((contact) => {console.log("contact",contact);}))
  {

  //save the contact in data base
  this.contactServise.save(this.cont.value).subscribe((contact) => {console.log("contact",contact);this.cont.reset()});
  }
  }
   
  }

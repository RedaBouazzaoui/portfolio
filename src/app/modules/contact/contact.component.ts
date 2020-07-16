import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: FormGroup;
  Email: any;
  constructor(private ct: FormBuilder) { }

  ngOnInit() {
    this.contact = this.ct.group({  // Crée une instance de FormGroup
      name: [],                   // Crée une instance de FormControl
      email: [], 
      telephone: [],
      subject: [],
      message:[],                  // Crée une instance de FormControl
    });
  }

  login(f:NgForm) {

    this.Email.send({
  Host : "app.smtp2go.com",
  Username : "reda.bouazaoui10@gmail.com",
  Password : "RedaBou10",
  To : this.contact.value.email,
  From : "reda.bouazaoui10@gmail.com",
  Subject : this.contact.value.subject,
  Body : `
   <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.contact.value.name} <br /> <b>Email: </b>${this.contact.value.email}<br /> <b>Subject: </b>${this.contact.value.subject}<br /> <b>Message:</b> <br /> ${this.contact.value.message} <br><br> <b>~End of Message.~</b> `
  }).then( message => {alert(message); f.resetForm(); } );
    
  }
    // this.emailService.sendToSingleUser(this.contact.value.email,this.contact.value.subject,this.contact.value.message);
    // console.log('Données du formulaire...', this.contact.value);
  }

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactezMoiService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { SendgridService } from 'ngx-sendgrid';
 
@Injectable({
providedIn: 'root'
})
export class ContactezMoiService {
 
constructor(private service: SendgridService) { }
 
sendToSingleUser(to:string,subject:string,content:string){
this.service.BasicEmailToSingleUser( to, "reda.bouazaoui10@gmail.com", subject, content).subscribe(result=>{
console.log(result)
})
 
}
 
}

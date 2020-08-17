import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import{Comment} from 'src/app/models/comment'
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   comt : FormGroup
   comments: Comment[];
 
   test: object;
 
  // dependency injection 
  constructor(private CommentServise: CommentService ,private ct: FormBuilder){}

  ngOnInit() {
    
    this.resetContact();
    this.showAll();
    
  }
  resetContact(){ 
    // Create an instance of FormGroup
  this.comt = this.ct.group({ 
    // Create the instances of FormControl    
    name: [],
    currentPosition: [],                   
    comment: [], 
   
                     
  });
}

showAll(){
  
  this.CommentServise.findAll().subscribe(data => {this.comments=Object.values(data);this.test=this.comments[0];console.log(Object.values(this.test));this.comments=Object.values(this.test);this.test=this.comments[0] ;this.comments=Object.values(this.test);console.log(this.comments) } )

}
addComment(){
  this.CommentServise.save(this.comt.value).subscribe((comment) => {console.log("contact",comment);this.comt.reset});
    
 
}

}

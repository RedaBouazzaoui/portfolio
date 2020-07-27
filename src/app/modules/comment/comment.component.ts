import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import{Comment} from 'src/app/models/comment'
import { from } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   comt : FormGroup
   commentsss:Comment[]=[];
   commentss: Comment[]=[]
  public comments = [
     {name:"reda",
   comment:"testobjectcomment",
   currentPosition:"testeur app"},
   {name:"brahim",
   comment:"nice works",
   currentPosition:"commentateur"}
   ];
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
  
// this.CommentServise.findAll().subscribe((data) => {this.comments=data;Object.keys(this.comments).map(function(key){  
//   this.commentss.push({[key]:this.comments[key]})  
//   return this.commentss;  
// });  console.log("comments"+ this.commentss)});

//  console.log("comments"+this.commentss);
//  this.commentss.forEach(element => {
//   console.log("comments"+element);
   
//  });

}
addComment(){
  this.CommentServise.save(this.comt.value).subscribe((comment) => {console.log("contact",comment);this.comt.reset()});

 
}

}

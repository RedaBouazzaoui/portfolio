import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import{Comment} from 'src/app/models/comment'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   comt : FormGroup
   comments:Comment[]=[];
   
  //  comments= [
  // //    {name:"reda",
  // //  comment:"testobjectcomment",
  // //  currentPosition:"testeur app"},
  // //  {name:"anas",
  // //  comment:"testobjectcomment",
  // //  currentPosition:"testeur app"}
  //  ];
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
  
this.CommentServise.findAll().subscribe((data:any) => {this.comments.concat(data.data); console.log("comments"+ this.comments)});

//  console.log("comments"+this.commentss);
//  this.commentss.forEach(element => {
//   console.log("comments"+element);
   
//  });

}
addComment(){
  this.CommentServise.save(this.comt.value).subscribe((comment) => {console.log("contact",comment);this.comt.reset()});

 
}

}

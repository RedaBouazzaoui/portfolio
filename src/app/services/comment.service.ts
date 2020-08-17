import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  backEndUrlComment: string="http://portfoliobackend-env.eba-t2kvgmv2.ca-central-1.elasticbeanstalk.com/comments"
   test:any;
  constructor(private http: HttpClient) { }

  findAll(){
   
  // this.test=this.http.get<Comment[]>(this.backEndUrlComment);
  // console.log(this.test)

    return this.http.get(this.backEndUrlComment);

    
      }

      
   save(comment){

    return this.http.post<any>(this.backEndUrlComment,comment);
   }  
   
   


   
}


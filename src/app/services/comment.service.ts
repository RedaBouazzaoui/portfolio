import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  backEndUrlComment: string="http://portfoliobackend-env.eba-t2kvgmv2.ca-central-1.elasticbeanstalk.com/comments"
 
  constructor(private http: HttpClient) { }

  findAll(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.backEndUrlComment);

    
      }

      
   save(comment){

    return this.http.post<any>(this.backEndUrlComment,comment);
   }  
   
   


   
}


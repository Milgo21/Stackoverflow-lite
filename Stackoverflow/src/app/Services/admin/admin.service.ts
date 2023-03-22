import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from 'src/app/Interfaces/answers.interface';
import { Question } from 'src/app/Interfaces/question.interface';
import { Message, User } from 'src/app/Interfaces/user.interface';
import { Comments } from 'src/app/Interfaces/comment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllUSers(){
    return this.http.get<User[]>('http://localhost:4000/auth/users')
  }
  getAllQuestions(){
    return this.http.get<Question[]>('http://localhost:4000/auth/question')
  }
  deleteQuestion(id:string):Observable<Message>{
    return this.http.delete<Message>(`http://localhost:4000/auth/users/${id}`)
  }
  deleteUser(id:string){

  }
  getAllAnswers(){
    return this.http.get<Answer[]>('http://localhost:4000/auth/answer')
  }
  getAllComments(){
    return this.http.get<Comments[]>('http://localhost:4000/auth/comment')
  }
}

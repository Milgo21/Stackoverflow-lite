import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AskQuestion, Question } from 'src/app/Interfaces/question.interface';
import { Observable } from 'rxjs';
import { Message } from 'src/app/Interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  getAllQuestions():Observable<Question[]>{
    return this.http.get<Question[]>('http://localhost:4000/auth/question')
  }
  askQuestion(quiz:AskQuestion):Observable<AskQuestion>{
    return this.http.post<AskQuestion>('http://localhost:4000/auth/question/ask', quiz)
  }
  updateQuestion(updatedQUiz:any){
    return this.http.put(``,updatedQUiz)
  }
  getSingleQuestionFull(id:string):Observable<any>{
    return this.http.get<any>(`http://localhost:4000/auth/question/full${id}`)
  }
}

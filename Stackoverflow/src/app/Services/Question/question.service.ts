import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AskQuestion, Question } from 'src/app/Interfaces/question.interface';
import { Observable } from 'rxjs';
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
  updateQuestion(){
    
  }
}

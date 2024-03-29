import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AskQuestion, FullQuestion, Question, UpdateQuestion } from 'src/app/Interfaces/question.interface';
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
  updateQuestion(id:string,updatedQUiz:UpdateQuestion):Observable<Question>{
    return this.http.put<Question>(`http://localhost:4000/auth/question//${id}`,updatedQUiz)
  }
  getUserQuestions():Observable<Question[]>{
    return this.http.get<Question[]>('http://localhost:4000/auth/question/all/quiz')
  }

  addComment(){

  }
  addAnswer(answer:string, question_id:string){
   return this.http.post('http://localhost:4000/auth/answer', {answer, question_id})
  }


  getSingleQuestionFull(id:any):Observable<FullQuestion[]>{
    return this.http.get<FullQuestion[]>(`http://localhost:4000/auth/question/full/${id}`)
  }
  getSingleQuizById(id:string):Observable<Question>{
    return this.http.get<Question>(`http://localhost:4000/auth/question/${id}`)
  }
}

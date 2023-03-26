import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Question } from 'src/app/Interfaces/question.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  questions:Question[]=[]
  totalQuiz!:number
  constructor(private QuestionService:QuestionService){}
  ngOnInit(): void {
    this.QuestionService.getUserQuestions().subscribe((questions)=>{
      console.log(questions);
      this.questions=questions
      this.totalQuiz = questions.length
    })

  }



  filterbyAnswers(){
    console.log("majibu");

  }
  allQuestions(){
    console.log("zote");

  }
  filterbyDate(){
    console.log("tarehe");

  }
  deleteQuestion(id:string){
    console.log("mbwa");

  }
  update(id:string){

  }
}

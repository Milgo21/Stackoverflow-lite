import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { Question } from 'src/app/Interfaces/question.interface';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions:Question[]=[]


  constructor(private AdminService:AdminService){}
  ngOnInit(): void {
    this.AdminService.getAllQuestions().subscribe((questions)=>{
      console.log(questions);

      this.questions = questions

    })
  }

  deleteQuestion(id:string){
    console.log(id);

  }
}

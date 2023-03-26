import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Question } from 'src/app/Interfaces/question.interface';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  questions:Question[] = []
  constructor(private QuestionService:QuestionService){}
  ngOnInit(): void {
    this.QuestionService.getAllQuestions().subscribe((questions)=>{
      this.questions=questions
      // console.log(questions);

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Question } from 'src/app/Interfaces/question.interface';
import { TruncatePipe } from 'src/app/Pipes/truncate.pipe';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/Pipes/search.pipe';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,RouterModule,TruncatePipe,ReactiveFormsModule,SearchPipe],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  questions:Question[] = []
  searchForm!:FormGroup
  constructor(private QuestionService:QuestionService){}
  ngOnInit(): void {
    this.QuestionService.getAllQuestions().subscribe((questions)=>{
      this.questions=questions
      // console.log(questions);

    })

    this.searchForm = new FormGroup({
      search: new FormControl('')
    })
  }
}


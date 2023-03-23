import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-askquestion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit{

  askForm!:FormGroup
  constructor(private QuizService:QuestionService, private Route:Router){}
  ngOnInit(): void {
    this.askForm = new FormGroup({
      question_title: new FormControl(null, [Validators.required]),
      question_desc:new FormControl(null, [Validators.required]),
      question_trial:new FormControl(null, [Validators.required]),
      question_tags:new FormControl(null, [Validators.required])
    })
  }
  askquestion(){
    console.log(this.askForm);
    this.QuizService.askQuestion(this.askForm.value).subscribe((response)=>{
      console.log(response);

    })
    this.Route.navigate(['posts'])
  }
}

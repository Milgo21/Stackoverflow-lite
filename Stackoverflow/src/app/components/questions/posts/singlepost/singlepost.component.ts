import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { FullQuestion, Question } from 'src/app/Interfaces/question.interface';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit{
  question!:FullQuestion[]
  id!:string
  answer!:string
  user_id!:string
  commentForm!:FormGroup
  answerForm!:FormGroup
  constructor(private route:ActivatedRoute, private QustionService:QuestionService){}
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id = param['id']
      console.log(this.id);

      this.QustionService.getSingleQuestionFull(this.id).subscribe((questions)=>{
          console.log(questions);
        this.question = questions

        if(questions){
          for(let i=0; i <this.question.length; i++){
            if(this.question[i].user_id === this.user_id){

            }
          }
        }
      })


    })

    this.commentForm = new FormGroup({
      comment:new FormControl(null)
    })

    this.answerForm = new FormGroup ({
      answer:new FormControl(null)
    })


  }

  addComment(){

  }
  like(){

  }
  dislike(){

  }
  answerquestion(){

  }
}

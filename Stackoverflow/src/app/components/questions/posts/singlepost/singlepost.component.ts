import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { FullQuestion, Question } from 'src/app/Interfaces/question.interface';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  myGroup!:FormGroup
  noofans!:number
  constructor(private route:ActivatedRoute, private QustionService:QuestionService, private fb:FormBuilder){
    this.answerForm = this.fb.group({
      answer:('')
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id = param['id']
      console.log(this.id);

      this.QustionService.getSingleQuestionFull(this.id).subscribe((questions)=>{
          console.log(questions);
        this.question = questions
        this.noofans = questions.length
      })


    })


    // this.answerForm = new FormGroup ({
    //   answer:new FormControl(null)
    // })


    this.commentForm = new FormGroup({
      comment:new FormControl(null)
    })
  }

  addComment(id:string){
    console.log(this.answerForm);

  }
  like(){

  }
  dislike(){

  }
  answerquestion(question_id:string){
    const control = this.answerForm.get('answer');
    if (control != null) {
    const value = control.value;
    console.log(value);
       // const nswer = this.answerForm.get('answer').value;




    console.log(question_id +'mimi');
    this.QustionService.addAnswer(value,question_id).subscribe((response)=>{
      console.log(response);

    })

  }

}
}

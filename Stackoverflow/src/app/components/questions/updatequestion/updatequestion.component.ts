import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question/question.service';

@Component({
  selector: 'app-updatequestion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit{
updateForm!:FormGroup
id!:string
constructor( private route:ActivatedRoute, private QuestionService:QuestionService, private router:Router){}
ngOnInit(): void {
  this.updateForm =  new FormGroup({
    question_title: new FormControl('', [Validators.required]),
    question_desc:new FormControl('', [Validators.required]),
    question_trial:new FormControl('', [Validators.required]),
    question_tags:new FormControl('', [Validators.required])
  })

  this.route.params.subscribe((param:Params)=>{
    this.id = param['id']
    console.log(this.id);
    this.QuestionService.getSingleQuizById(this.id).subscribe((question)=>{
      console.log(question);
      if(question){
        this.updateForm.setValue({
          question_title:question.question_title,
          question_desc:question.question_desc,
          question_trial:question.question_trial,
          question_tags:question.question_tags

        })
      }

    })


  })
}


updateQuestion(){
  this.QuestionService.updateQuestion(this.id, this.updateForm.value).subscribe()
  console.log(this.updateForm.value);

  this.router.navigate(['profile'])
  this.updateForm.reset()

}
}

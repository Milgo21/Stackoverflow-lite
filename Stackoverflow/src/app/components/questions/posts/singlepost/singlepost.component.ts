import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Question } from 'src/app/Interfaces/question.interface';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit{
  question!:Observable<any>
  id!:string
  constructor(private route:ActivatedRoute, private QustionService:QuestionService){}
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id = param['id']
      this.question = this.QustionService.getSingleQuestionFull(param['id'])
      console.log(this.question + 'me');

    })
  }

}

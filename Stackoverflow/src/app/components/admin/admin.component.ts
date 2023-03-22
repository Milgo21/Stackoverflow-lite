import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from 'src/app/Services/admin/admin.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  noofQuiz!:number
  noofComments!:number
  noofAnswers!:number
  constructor(private AdminService:AdminService){}
  ngOnInit(): void {
    this.AdminService.getAllQuestions().subscribe((questions)=>{
      // this.questions = userss
      // console.log(questions);
      this.noofQuiz= questions.length

    })
    this.AdminService.getAllComments().subscribe((comments)=>{
      this.noofComments = comments.length
      // console.log(comments);
    })
    this.AdminService.getAllAnswers().subscribe((answers)=>{
      console.log(answers);
      this.noofAnswers= answers.length

    })
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {



  filterbyAnswers(){
    console.log("majibu");

  }
  allQuestions(){
    console.log("zote");

  }
  filterbyDate(){
    console.log("tarehe");

  }
  deleteQuestion(){
    console.log("mbwa");

  }
}

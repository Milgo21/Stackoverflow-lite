import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-askquestion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit{

  askForm!:FormGroup
  ngOnInit(): void {
    this.askForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description:new FormControl(null, [Validators.required]),
      trial:new FormControl(null, [Validators.required]),
      tags:new FormControl(null, [Validators.required])
    })
  }
  askquestion(){
    console.log(this.askForm);

  }
}

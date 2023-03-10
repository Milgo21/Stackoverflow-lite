import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatequestion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit{
updateForm!:FormGroup
ngOnInit(): void {
  this.updateForm =  new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description:new FormControl(null, [Validators.required]),
    trial:new FormControl(null, [Validators.required]),
    tags:new FormControl(null, [Validators.required])
  })
}
updateQuestion(){
  console.log(this.updateForm);

}
}

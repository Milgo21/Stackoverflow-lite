import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticaionService } from 'src/app/Services/auth/authenticaion.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/State/appState';
import { Store } from '@ngrx/store';
import { register } from 'src/app/State/Actions/userActions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
registerForm!:FormGroup
constructor(private UserService:AuthenticaionService, private router: Router, private store: Store<AppState>) {}
ngOnInit(): void {
  this.registerForm = new FormGroup ({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])

  })
}
register1(){
  console.log(this.registerForm);
  // this.UserService.registerUser(this.registerForm.value).subscribe(response =>{
  //   console.log(response);

  //   this.router.navigate(['']);
  // })
  this.store.dispatch(register({user:this.registerForm.value}))

}
}

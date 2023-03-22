import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/app/State/appState';
import { AuthenticaionService } from 'src/app/Services/auth/authenticaion.service';
import { Store } from '@ngrx/store';
import { loginUser } from 'src/app/State/Actions/userActions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  constructor( private AuthService:AuthenticaionService, private router:Router,  private store: Store<AppState>){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required])
    })
  }
  login1(){
    this.store.dispatch(loginUser({user:this.loginForm.value}))
    // this.router.navigate(['posts'])
  }
}

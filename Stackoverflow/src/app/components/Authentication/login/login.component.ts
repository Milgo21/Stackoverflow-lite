import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/app/State/appState';
import { AuthenticaionService } from 'src/app/Services/auth/authenticaion.service';
import { Store } from '@ngrx/store';
import { loginUser } from 'src/app/State/Actions/userActions';
import { AuthService } from 'src/app/Services/auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  errorMess =""
  constructor( private AuthenticationService:AuthenticaionService,private auth:AuthService, private router:Router,  private store: Store<AppState>){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required])
    })
  }
  login1(){
    this.store.dispatch(loginUser({user:this.loginForm.value}))
    this.AuthenticationService.login(this.loginForm.value).subscribe(response =>{
      console.log(response);
      this.auth.setRole(response.is_admin)
      this.auth.login()
      localStorage.setItem('token', response.token)
      if (response.is_admin == false && response.token) {
          this.router.navigate(['posts'])  
      } else if(response.is_admin == true && response.token){
          this.router.navigate(['admin'])  
      }
    }
    ,(error)=>{
      this.errorMess= error.error.message;
    })
  }
}

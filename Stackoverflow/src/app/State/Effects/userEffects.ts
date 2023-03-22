import { Injectable } from "@angular/core";
import { catchError, exhaustMap, of,map } from "rxjs"
import {Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthenticaionService } from "src/app/Services/auth/authenticaion.service";
import { AuthService } from "src/app/Services/auth/auth.service";
import * as Signupactions from "../Actions/userActions"


@Injectable()
export class UserEffects{
  constructor( private authService: AuthenticaionService, private action:Actions, private auth:AuthService){}
    register = createEffect(() => {
      return this.action.pipe(
        ofType(Signupactions.register),
        exhaustMap(action =>{
          return this.authService.registerUser(action.user).pipe(
            map(res=> Signupactions.registerSuccess({res})),
            catchError(error => of(Signupactions.registerFailure({errorMessage:error.message})))
          )
        })
      )
    })


  login = createEffect(()=>{
    return this.action.pipe(
      ofType(Signupactions.loginUser),
      exhaustMap(action=>{
        return this.authService.login(action.user).pipe(
          map(res=>{
            // this.auth.getRole(res.is_admin)
            this.auth.login()
            localStorage.setItem('token',res.token)
            return Signupactions.loginUserSuccess({res})}),
          catchError(error => of (Signupactions.loginFail({errorMessage: error.message})))
        )
      })
    )
  })

}







// effects

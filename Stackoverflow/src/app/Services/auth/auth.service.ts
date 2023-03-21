import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedin = false
  private is_admin =''
  getAuthstatus():Promise<Boolean>{
    const promise = new Promise<Boolean>((resolve, reject) =>{
      setTimeout(()=>{
        resolve(this.loggedin)
      },15)
    })
    return promise
  }
  getRole(){
    return this.is_admin
  }
  login(){
    this.loggedin = true
  }
  logout(){
    this.loggedin = false
  }
}

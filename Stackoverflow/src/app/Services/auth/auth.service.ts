import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedin = false
  is_admin = false
  getAuthstatus():Promise<Boolean>{
    const promise = new Promise<Boolean>((resolve, reject) =>{
      setTimeout(()=>{
        resolve(this.loggedin)
      },10)
    })
    return promise
  }
  getRole(){
    return this.is_admin
  }
  setRole(is_admin:boolean){
    this.is_admin = is_admin
  }
  login(){
    this.loggedin = true
  }
  logout(){
    this.loggedin = false
    localStorage.removeItem('token')
  }
}

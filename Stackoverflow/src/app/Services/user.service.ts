import { Injectable } from '@angular/core';
import { LogUser } from '../Interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  Users:LogUser[] = [
    {
      username:"Milgo21",
      email:"time@gmail.com",
      password:"123456"
    },
    {
      username:"Doe1212",
      email:"johdoe@email.com",
      password:"321456"
    }
  ]
  register(){
    
  }
}

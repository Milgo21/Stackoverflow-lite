import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogUser } from 'src/app/Interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticaionService {

  constructor(private http: HttpClient) { }

  registerUser(user: LogUser):Observable<LogUser>{
    return this.http.post<LogUser>('http://localhost:4000/auth/users/register', user)
  }
  login(){
    console.log("mambo");

  }

}

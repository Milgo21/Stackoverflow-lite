import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginnewUser, LoginSuccess, LogUser, Message } from 'src/app/Interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticaionService {

  constructor(private http: HttpClient) { }

  registerUser(user: LogUser):Observable<Message>{
    return this.http.post<Message>('http://localhost:4000/auth/users/register', user)
  }
  login(user:loginnewUser):Observable<LoginSuccess>{
    return this.http.post<LoginSuccess>('http://localhost:4000/auth/users/login', user)

  }

}

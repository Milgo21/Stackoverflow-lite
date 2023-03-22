import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(req.url!=='http://localhost:4000/auth/users/register' && req.url!=='http://localhost:4000/auth/users/login'){
    const token = localStorage.getItem('token') as string
    let modifiedReq= req.clone({headers:new HttpHeaders().append('token', token).append('Custom', 'Just see Me')})
    return next.handle(modifiedReq)
    }
    return next.handle(req)
  }
  }

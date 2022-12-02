import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentUser: any;
  token: string;
  errMsg = '';
  

  constructor(private authService:AuthService) {
    this.currentUser = this.authService.currentUserValue;
    if(this.currentUser){
      this.token = this.currentUser.token;
    } else {
      this.token = null;
    }
    
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    if (this.token != null){
      return next.handle(this.addAuthToken(request));
    }
    return next.handle(authReq)
    
  }
  addAuthToken(request: HttpRequest<any>){
    return request.clone(
      {
        setHeaders: {
          Authorization: `Token ${this.token}`
        }
      }
    )
  }
}
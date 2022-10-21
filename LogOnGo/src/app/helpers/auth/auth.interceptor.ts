import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';

const tokenHeaderKey = 'Authorization'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentUser: any;
  token: string;
  

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
    // if (request.method == "PUT") {
    //   return next.handle(this.addAuthTokenAndModifyData(request));
    // }
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
  // addAuthTokenAndModifyData(request: HttpRequest<any>) {
  //   return request.clone(
  //     {
  //       setHeaders: {
  //         Authorization: `Basic ${this.token}`
  //       },
  //       body: { "data" : "Modified"}
  //     }
  //   )
  // }
}

// export const authInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
// ]

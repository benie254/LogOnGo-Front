import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { MyErrorStateMatcher } from '../../services/matcher/matcher.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  authenticated: boolean = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.authenticated = false; 
      this.router.navigate(['/login/success'])
    } else {
      this.authenticated = false; 
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
  }

  isValid(event: boolean): void {
    console.log(event);
  }
  logIn(userData): void {
    Notiflix.Loading.hourglass('Processing, please wait...');
    this.authService.login(userData).pipe(
      first()
      ).subscribe(
        data => {
          Notiflix.Loading.remove();
                  // this.router.navigate(['/']);
                  Notiflix.Notify.success('Login successful! Welcome.');
                  location.reload();
                  this.router.navigate(['/login/success'])
                  this.authenticated = true;
                });
    }
}
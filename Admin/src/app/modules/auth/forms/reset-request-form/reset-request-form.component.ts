import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Pass } from 'src/app/classes/pass/pass';
import { User } from 'src/app/classes/user/user';
import { AuthService } from '../../services/auth/auth.service';
import { MyErrorStateMatcher } from '../../services/matcher/matcher.service';

@Component({
  selector: 'app-reset-request-form',
  templateUrl: './reset-request-form.component.html',
  styleUrls: ['./reset-request-form.component.css']
})
export class ResetRequestFormComponent implements OnInit {
  authenticated: boolean = false;
  currentUser: any = this.authService.currentUserValue;
  id:number;
  reqSent: boolean = false;
  matcher = new MyErrorStateMatcher();
  resetConfirmed: boolean = false;
  isStaff: boolean = false;
  isSuper: boolean = false;

  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.currentUser){
      this.authenticated = true;
      this.isSuper = this.currentUser.is_superuser;
      this.isStaff = this.currentUser.is_staff;
    }else{
      this.authenticated = false;
    }
  }
  requestResetPass(userData: Pass){
    Notiflix.Loading.hourglass('Requesting... please wait.')
    this.authService.requestResetPassword(userData).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            'Reset Link sent!',
            'We have sent a password reset link to your email with further instructions. Please check it out.',
            'Thanks',
          );
          history.back();
          this.reqSent = true;
        }
      }
    )
  }
  reloadAndLogout(){
    this.authService.logout();
    location.reload();
  }
  

  
}


import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Pass } from 'src/app/classes/pass/pass';
import { User } from 'src/app/classes/user/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-reset-request-form',
  templateUrl: './reset-request-form.component.html',
  styleUrls: ['./reset-request-form.component.css']
})
export class ResetRequestFormComponent implements OnInit,OnDestroy {
  authenticated: boolean = false;
  currentUser: User = this.authService.currentUserValue;
  id:number;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private authService:AuthService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.currentUser){
      this.authenticated = true;
    }
  }
  requestResetPass(userData: Pass){
    Notiflix.Loading.hourglass('Requesting... please wait.')
    this.authService.requestResetPassword(userData, this.id).pipe(takeUntil(this.unsubscribe$)).subscribe(
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
        }
      }
    )
  }
  reloadAndLogout(){
    this.authService.logout();
    location.reload();
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


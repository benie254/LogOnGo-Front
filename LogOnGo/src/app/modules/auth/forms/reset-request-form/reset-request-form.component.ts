import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isThisQuarter } from 'date-fns';
import * as Notiflix from 'notiflix';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-reset-request-form',
  templateUrl: './reset-request-form.component.html',
  styleUrls: ['./reset-request-form.component.css']
})
export class ResetRequestFormComponent implements OnInit {
  authenticated: boolean = false;
  currentUser = this.authService.currentUserValue;
  procced: boolean;
  id:number;
  requestSent: boolean;

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
  requestResetPass(userData){
    Notiflix.Loading.hourglass('Requesting...')
    this.authService.requestResetPassword(userData, this.id).pipe(first()).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            'Reset Link sent!',
            'We have sent a password reset link to your email with further instructions. Please check it out.',
            'Okay',
          );
          this.back();
        }
      }
    )
  }
  reloadAndLogout(){
    this.authService.logout();
    location.reload();
  }
  back(){
    history.back();
  }
}


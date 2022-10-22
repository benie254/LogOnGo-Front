import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  authenticated: boolean = false;
  currentUser = this.authService.currentUserValue;
  updateConfirmed: boolean;
  procced: boolean;
  id:number;
  err: any;
  errMessage = '';
  statusText = '';
  requestSent: boolean;

  constructor(
    private authService:AuthService,
    private userService:UserService,
    private route:ActivatedRoute,
  ) { 
    if(this.currentUser){
      this.authenticated = true;
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reportWarn();
  }
  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm reset',
      "Are you sure you want to reset your password?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Please note",
          "Click the button that will appear on this page to receive a password reset link in your email.",
          "Okay",
        )
        this.updateConfirmed = true;
        // this.closed = false;
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.updateConfirmed = false;
        history.back();
      }
    )
  }
  requestResetPass(userData){
    Notiflix.Loading.hourglass('Requesting...')
    this.userService.requestResetPassword(userData, this.id).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            'Reset Link sent!',
            'We have sent a password reset link to your email with further instructions. Please check it out.',
            'Okay',
          );
          // this.reloadAndLogout();
          this.requestSent = true;
          
          
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => {
          Notiflix.Loading.remove();
          console.error("reset error:",e)
          this.err = e.error 
          this.errMessage = this.err.detail 
          this.statusText = e.statusText 
          if(this.errMessage){
            Notiflix.Report.failure(
              this.statusText,
              this.errMessage,
              'Retry',
            );
          }else if(this.statusText && !this.errMessage){
            Notiflix.Report.failure(
              this.statusText,
              'There was a problem with your request. Please try again later.',
              'Okay',
            );
            
          }
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

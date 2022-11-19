import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  updateConfirmed: boolean;
  currentUser = this.authService.currentUserValue;

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
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
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.updateConfirmed = false;
        this.router.navigate(['/profile/' + this.currentUser.id]);
      }
    )
  }
}

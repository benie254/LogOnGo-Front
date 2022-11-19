import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  authenticated: boolean = false;
  id: number;
  err: any;
  errMessage = '';
  errOldPass = '';
  errNewPass = '';
  errNewPass2 = '';
  statusText = '';
  values = '';
  value = '';
  noMatch: boolean;
  updateConfirmed: boolean;

  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.reportWarn();
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    }
  }
  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to change your password?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "<p>After updating your password, we will log you out so that you can log in with your new password.</p>",
          "Proceed",
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

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-reset-confirmed',
  templateUrl: './reset-confirmed.component.html',
  styleUrls: ['./reset-confirmed.component.css']
})
export class ResetConfirmedComponent implements OnInit {
  updateConfirmed: boolean = false;
  currentUser = this.authService.currentUserValue;

  constructor(
    private router:Router,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.reportWarn();
  }
  reportWarn(){
    Notiflix.Confirm.show(
      'Almost done',
      "You have successfully confirmed your reset request. Now, enter your new password.",
      "Okay",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "<p>After resetting your password, we will log you out so that you can log in with your new password.</p>",
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
        this.router.navigate(['/profile/' + this.currentUser.id]);
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-reset-confirmed',
  templateUrl: './reset-confirmed.component.html',
  styleUrls: ['./reset-confirmed.component.css']
})
export class ResetConfirmedComponent implements OnInit {

  authenticated: boolean = false;
  id: number;
  err: any;
  errMessage = '';
  errNewPass = '';
  errNewPass2 = '';
  statusText = '';
  values = '';
  value = '';
  noMatch: boolean;
  updateConfirmed: boolean;
  currentUser = this.authService.currentUserValue;

  constructor(
    private authService:AuthService,
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
  ) {
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reportWarn();
  }
  onKeyOne(event: any){
    this.value = event.target.value; 
  }
  onKey(event: any){
    this.values = event.target.value; 
  }
  checkPass(){
    let pass1 = document.getElementById("pass1").textContent;  
    var pass2 = document.getElementById("pass2").textContent;  
    if (pass1 == pass2) {
      this.noMatch = false;
    } else if (pass1 != pass2){
      this.noMatch = true;
    } 
    }

  resetPass(passData){
    Notiflix.Loading.hourglass('Processing...')
    console.warn("pass data:",passData)
    this.userService.resetPassword(passData, this.id).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            'Password updated',
            '',
            'Okay',
          );
          this.reloadAndLogout();
          
          
          
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => {
          Notiflix.Loading.remove();
          console.error("update error:",e)
          this.err = e.error 
          this.errMessage = this.err.detail 
          this.statusText = e.statusText 
          if(this.errMessage){
            Notiflix.Report.failure(
              this.statusText,
              this.errMessage,
              'Retry',
            );
          }else if(this.statusText){
            this.errNewPass = this.err.password 
            this.errNewPass2 = this.err.password2 
            Notiflix.Report.failure(
              this.statusText,
              'Please fix the highlighted errors and try again.',
              'Okay',
            );
            
          }
          Notiflix.Notify.failure('Update failed!')
        } 
      }
    )
  }
  reloadAndLogout(){
    this.authService.logout();
    location.reload();
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

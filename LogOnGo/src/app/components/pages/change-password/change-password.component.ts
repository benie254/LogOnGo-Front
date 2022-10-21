import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { RegisterComponent } from '../../auth/register/register.component';

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
    console.warn("current user value:",this.authService.currentUserValue)
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

  changePass(passData){
    Notiflix.Loading.hourglass('Processing...')
    console.warn("pass data:",passData)
    this.userService.changePassword(passData, this.id).subscribe(
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
            this.errOldPass = this.err.old_password.old_password 
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

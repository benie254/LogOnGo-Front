import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-reset-confirmed-form',
  templateUrl: './reset-confirmed-form.component.html',
  styleUrls: ['./reset-confirmed-form.component.css']
})
export class ResetConfirmedFormComponent implements OnInit {
  authenticated: boolean = false;
  id: number;
  values = '';
  value = '';
  noMatch: boolean;
  updateConfirmed: boolean;
  currentUser = this.authService.currentUserValue;

  constructor(
    private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    }
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
    this.authService.resetPassword(passData, this.id).pipe(first()).subscribe(
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
        } 
      }
    )
  }
  reloadAndLogout(){
    this.authService.logout();
    location.reload();
  }
}

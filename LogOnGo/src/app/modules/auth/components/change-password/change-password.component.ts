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
  currentUser: any;

  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.authenticated = true;
      
    } else {
      this.authenticated = false;
    }
  }
  

}

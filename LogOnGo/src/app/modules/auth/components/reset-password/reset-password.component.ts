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
  ) { }

  ngOnInit(): void {
  }
}

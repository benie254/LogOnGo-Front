import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  authenticated: boolean = false;

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

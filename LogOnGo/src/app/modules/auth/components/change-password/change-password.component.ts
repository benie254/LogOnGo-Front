import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router:Router
  ) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
      this.router.navigate(['/auth'])
    }
  }
  

}

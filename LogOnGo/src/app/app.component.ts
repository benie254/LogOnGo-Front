import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { TokenStorageService } from './services/token/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LogOnGo';
  private roles: string[] = [];
  isLoggedIn = false; 
  showAdmin = false; 
  username: string;
  authenticated: boolean;

  constructor(
    private tokenStorage:TokenStorageService,
    private authService:AuthService,
    private router:Router,
    ) {
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    } else {
      this.authenticated = false; 
      this.router.navigate(['login'])
    }
  }

  ngOnInit(): void {
    // this.isLoggedIn = !!this.tokenStorage.getToken();
    // if (this.isLoggedIn) {
    //   const user = this.tokenStorage.getUser();
    //   this.roles = user.roles; 
    //   this.showAdmin = this.roles.includes('ROLE_ADMIN');
    //   this.username = user.username
    // }
  }
  // logout(): void {
  //   this.tokenStorage.logout();
  //   window.location.reload();
  // }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isThisSecond } from 'date-fns';
import { AuthService } from './services/auth/auth.service';
import { TokenStorageService } from './services/token/token-storage.service';
import { UserService } from './services/user/user.service';

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
  userProfile: any;
  errMsg = '';

  constructor(
    private tokenStorage:TokenStorageService,
    private authService:AuthService,
    private router:Router,
    private userService:UserService,
    ) {
    
    if(this.authService.currentUserValue){
      this.authenticated = true;
      console.warn('token:',this.authService.currentUserValue)
    } else {
      this.authenticated = false; 
      this.authService.logout();
      this.router.navigate(['login'])
    }
  }

  ngOnInit(): void {
    this.checkUser();
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
  checkUser(){
    this.userService.getUser().subscribe({
      next: (res) => {
        this.userProfile = res;
      },
      error: (err) => {
        this.errMsg = err.statusText;
        if(this.errMsg = 'Unauthorized'){
          this.authService.logout();
          this.router.navigate(['/login'])
        }
      }
    })
  }
}

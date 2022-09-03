import { Component, OnInit } from '@angular/core';
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

  constructor(private tokenStorage:TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles; 
      this.showAdmin = this.roles.includes('ROLE_ADMIN');
      this.username = user.username
    }
  }
  logout(): void {
    this.tokenStorage.logout();
    window.location.reload();
  }
}

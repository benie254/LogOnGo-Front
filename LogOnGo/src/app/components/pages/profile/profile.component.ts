import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mpesa_logs: any;
  user_logs: any; 
  announcements: any;
  currentUser = this.authService.currentUserValue;

  constructor(
    private tokenStorage:TokenStorageService,
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    // this.currentUser = this.tokenStorage.getUser();
  }

}

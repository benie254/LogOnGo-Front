import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})
export class ProfileSidebarComponent implements OnInit {
  profile_details: any;
  currentUser = this.authService.currentUserValue;

  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
  }

}

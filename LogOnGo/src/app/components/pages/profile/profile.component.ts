import { Component, OnInit } from '@angular/core';
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
  currentUser: any;

  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
  }

}

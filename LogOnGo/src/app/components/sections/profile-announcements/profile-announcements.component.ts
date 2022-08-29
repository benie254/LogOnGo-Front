import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-announcements',
  templateUrl: './profile-announcements.component.html',
  styleUrls: ['./profile-announcements.component.css']
})
export class ProfileAnnouncementsComponent implements OnInit {
  date: any; 
  announce: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  authenticated: boolean = false;
  isSuper: boolean = false; 
  isStaff: boolean = false;
  currentUser: any;

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.authenticated = true; 
      this.isSuper = this.auth.currentUserValue.is_superuser
      this.isStaff = this.auth.currentUserValue.is_staff
      this.currentUser = this.auth.currentUserValue
    }else{
      this.authenticated = false; 
      this.auth.logout();
      this.router.navigate(['/auth'])
    }
  }
}

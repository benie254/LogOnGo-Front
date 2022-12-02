import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
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
      this.router.navigate(['/auth']);
    }
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/auth']);
    location.reload();
  }
}


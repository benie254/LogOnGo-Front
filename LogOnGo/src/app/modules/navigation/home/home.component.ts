import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  isExpanded: boolean = false;
  panelOpenState = false;

  constructor(
    private auth:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    }else{
      !this.currentUser;
      this.auth.logout();
      this.router.navigate(['/auth'])
    }
  }

}

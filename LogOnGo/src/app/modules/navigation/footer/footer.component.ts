import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentUser: any;
  authenticated: boolean = false;
  isSuper: boolean = false;

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.auth.currentUserValue;
    if(this.currentUser){
      this.authenticated = true;
      this.isSuper = this.currentUser.is_superuser;
    } else {
      this.authenticated = false;
    }
  }

}

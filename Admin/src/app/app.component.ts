import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from './modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Admin';

  constructor(
    private auth:AuthService,
    private router:Router,
  ){
    if(!this.auth.currentUserValue){
      this.auth.logout();
      this.router.navigate[('/auth')]
    }else if(!this.auth.currentUserValue.is_staff || !this.auth.currentUserValue.is_superuser){
      this.auth.logout();
      this.router.navigate[('/auth')];
      Notiflix.Report.failure(
        'Not Permitted!',
        "Your log in was successful, but you don't have the permissions to access this page.",
        'Too Bad',
      )
    }
  }
  
  



}

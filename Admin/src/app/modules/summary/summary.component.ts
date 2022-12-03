import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from '../auth/services/auth/auth.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  @Input() fuels: any;
  @Input() logS: any;
  @Input() cardS: any; 
  @Input() mpesaS: any;

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
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

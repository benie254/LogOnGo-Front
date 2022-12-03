import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentUser: any;

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
  }

}

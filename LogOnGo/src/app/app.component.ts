import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isThisSecond } from 'date-fns';
import * as Notiflix from 'notiflix';
import { AuthService } from './modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LogOnGo';
  private roles: string[] = [];
  isLoggedIn = false; 
  showAdmin = false; 
  username: string;
  authenticated: boolean;
  userProfile: any;
  errMsg = '';
  currentUser: any;

  constructor(
    private authService:AuthService,
    private router:Router,
    private meta:Meta,
    private detector:ChangeDetectorRef,
    ) { }

  ngOnInit(): void {
    this.meta.updateTag({name: 'title', content: 'AppRoot'}) 
    this.meta.updateTag({name: 'description', content: 'Petrol Station Management'}) 
    this.meta.updateTag({name: 'image', content: ''}) 
    this.meta.updateTag({name: 'site', content: 'LogOnGo'}) 
    if(this.authService.currentUserValue){
      this.authenticated = true;
      console.warn('token:',this.authService.currentUserValue)
      this.currentUser = this.authService.currentUserValue
    } else {
      this.authenticated = false; 
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
    this.detector.detectChanges();
  }
}

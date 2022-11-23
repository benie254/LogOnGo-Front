import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Profile } from 'src/app/classes/profile/profile';
import { AuthService } from '../../auth/services/auth/auth.service';
import { FuelService } from '../../fuel/services/fuel.service';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  isLoggedIn: boolean = false;
  authenticated: boolean;
  id: number;
  values = '';
  noInput: boolean = true;
  fetchLogSuccess: boolean = false; 
  noLog: boolean = false;
  log: any;

  isLoading: boolean = false;
  year = new Date().getFullYear()
  zero = new Date().getDay()
  day = new Date().getDate()
  month = new Date().getUTCMonth() + 1
  // date = this.year + '-' + this.month + '-' + this.zero + this.day
  date = new Date()
  profile_details: any;
  fuels: any;
  searchResults: any;
  eOD: any;
  searchText: any;
  dateResults: any;
  currentUser = this.authService.currentUserValue;
  isStaff: boolean = false;
  isSuper: boolean = false;
  // backURL = 'https://logongo.herokuapp.com/admin/';
  backURL = 'http://127.0.0.1:8000/admin/'

  constructor(
    private fuelService:FuelService,
    private authService:AuthService,
    private logService:LogService,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    if (this.currentUser){
      this.authenticated = true;
      this.isStaff = this.currentUser.is_staff;
      this.isSuper = this.currentUser.is_superuser;
      if(this.isSuper == true){
        this.isStaff = false;
      }
    } else {
      this.authenticated = false;
    }
    this.getFuels();
  }

  getFuels(){
    this.fuelService.getFuels().subscribe({
      next:  (data) => {
        this.fuels = data
      }
    })
  }

  
  

  profileDetails(){
    this.authService.getProfileDetails().subscribe((data:Profile) => {
      console.log(data);
      this.profile_details = data ;
    })
  }


  logout() {
    // this.ngOnInit()
    this.authService.logout();
    location.reload()
    // this.router.navigate(['/login']);
    this.authenticated = false;
  }
  refresh(){
    location.reload()
    this.ngOnInit();
  }

  
  dateValue(eod: any){
    this.eOD = eod;
  }


  

}


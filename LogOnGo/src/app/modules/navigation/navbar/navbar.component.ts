import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Profile } from 'src/app/classes/profile/profile';
import { AuthService } from '../../auth/services/auth/auth.service';
import { FuelService } from '../../fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public hideNav: boolean = false;
  isCollapsed: boolean = true;
  isLoggedIn: boolean = false;
  authenticated: boolean;
  id: number;
  values = '';
  noInput: boolean = true;
  fetchLogSuccess: boolean = false; 
  noLog: boolean = false;
  log: any;
  navAdmin: boolean = false;

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
  siteNav: boolean;
  saved: any; 
  switchAdmin: any;
  @Input() toggleAdmin: () => void;
  @Input() showAdmin: boolean;

  constructor(
    private fuelService:FuelService,
    private authService:AuthService,
    private detector:ChangeDetectorRef,
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
    this.detector.detectChanges();
    this.saveValue();
  }

  getFuels(){
    this.fuelService.getFuels().subscribe({
      next:  (data) => {
        this.fuels = data
      }
    })
  }
  goToAdmin(){
    this.siteNav = false;
  }
  
  saveValue(){
    this.copy(true)
    this.saved = this.switchAdmin;
  }
  exitAdmin(){
    if(this.siteNav = false){
      this.siteNav = this.saved;
    }else{
      this.siteNav = this.saved;
    }
    
  }
  copy = (text: any): void => {
    localStorage.setItem('mySavedItem',text);
    this.switchAdmin = localStorage.getItem('mySavedItem')
    console.warn(this.switchAdmin,"saved")
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


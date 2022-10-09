import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { Profile } from 'src/app/classes/profile/profile';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Emitters } from '../auth/emitters/emitters';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
  gas_info: any;
  diesel_info: any;
  petrol_info: any;
  searchResults: any;
  eOD: any;
  searchText: any;
  dateResults: any;
  currentUser = this.authService.currentUserValue;


  searchForm = this.fb.group({
    date: ['', [Validators.pattern]]
 });
  

  constructor(
    private profileService:ProfileService,
    private fuelService:FuelService,
    private authService:AuthService,
    private logService:LogService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    ) { 
      

    
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.petrol_info = data
      console.warn("petrol info data:",data)
      // Notiflix.Notify.success("get petrol success!")
    },
    err => {
      // Notiflix.Notify.failure("get petrol failure!")
    }
    );
    this.fuelService.getGasInfo().subscribe((data) => {
      this.gas_info = data
      console.warn("gas info data:",data)
      // Notiflix.Notify.success("get gas success!")
    },
    err => {
      // Notiflix.Notify.failure("get diesel failure!")
    });
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.diesel_info = data
      console.warn("diesel info data:",data)
      // Notiflix.Notify.success("get diesel success!")
    },
    err => {
      // Notiflix.Notify.failure("get diesel failure!")
    });
    if (this.currentUser){
      this.authenticated = true
      this.ngOnInit()
    } else {
      this.authenticated = false;
      this.ngOnInit()
    }
  }

  ngOnInit(): void {
    
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.isLoggedIn = auth;
      }
    );
    this.searchEverything();
  
    // this.route.params.subscribe(params => this.getByDate(params['id']))
  }

  onKey(event: any){
    this.values = event.target.value; 
    this.fetchLogSuccess = false;
    this.noLog = false;
    // if (this.values == ''){
    //   this.noInput = true;
    // } else {
    //   this.noInput = false;
    // }
  }
  search(logDate: string): void{
    this.fetchLogSuccess = false;
    this.noLog = false;
    logDate = this.values.trim();
    if (!logDate) { return; }
    this.logService.searchByDate(logDate);
    this.isLoading= true;
    this.getByDate(logDate);
  }
  getByDate(logDate): void{
    console.log("log date:",logDate)
    Notiflix.Loading.hourglass('Searching...')
    this.logService.searchByDate(logDate).subscribe( data => {
        this.dateResults = data;
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Search success')
        if (this.log == undefined || this.log && this.log.length == 0){
          this.noLog = true;
        } else {
          this.noLog = false;
        }
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('search failed!')
      }
    );
    setTimeout(
      function(){
        this.isLoading= false;
        this.fetchLogSuccess = true;
      }.bind(this),1000
    );
  }
  

  profileDetails(){
    this.profileService.getProfileDetails().subscribe((data:Profile) => {
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

  searchEverything(){
    this.logService.searchLog().subscribe(
      (data) => {
        this.searchResults = data;
      },
      err => {
        Notiflix.Notify.failure('search failed!')
      }
    )
  }
  
  dateValue(eod: any){
    this.eOD = eod;
  }


  

}

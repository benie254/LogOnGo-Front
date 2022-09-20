import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Profile } from 'src/app/classes/profile/profile';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
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

  profile_details: any;
  gas_info: any;
  diesel_info: any;
  petrol_info: any;
  currentUser = this.authService.currentUserValue;
  

  constructor(
    private profileService:ProfileService,
    private router:Router,
    private route:ActivatedRoute, 
    private fuelService:FuelService,
    private authService:AuthService,
    private http:HttpClient,
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
    
  }

  profileDetails(){
    this.profileService.getProfileDetails().subscribe((data:Profile) => {
      console.log(data);
      this.profile_details = data ;
    })
  }

  goToPetrolLogs(id){
    this.router.navigate(['/petrol',id])
  }
  goToDieselLogs(id){
    this.router.navigate(['/diesel',id])
  }
  goToGasLogs(id){
    this.router.navigate(['/gas',id])
  }
  goToProfile(id){
    this.router.navigate(['/uprofile',id])
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
    this.ngOnInit()
  }

}

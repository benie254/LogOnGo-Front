import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public errors: any = [];

   // the actual JWT token
  token = this.authService.currentUserValue;
 
   // the token expiration date
  public token_expires: Date;
  
   // the username of the logged in user
  public username: string;
  info: any;
  // username: User;
  currentUser = this.authService.currentUserValue;
  
  constructor(
    private fuelService:FuelService, 
    private router:Router,
    private mytoken:TokenStorageService,
    private authService:AuthService,
    ) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("petrol info data:",data)
    });
    
    console.warn("decoded:",this.currentUser)
    // console.warn("decoded:",jwt_decode(this.currentUser))
  }

  ngOnInit(): void {
    
    // this.currentUser = this.token.getUser();
    this.currentUser = this.authService.currentUserValue;
    this.refreshUser()
    
  }

  // getDecodedToken(currentUser): any {
  //   try{
  //     console.warn("decoded:",jwt_decode(currentUser))
  //   } catch(Error){
  //     return null;
  //   }
  // }

  goToPetrolLogs(id){
    this.router.navigate(['/petrol',id])
  }
  
  refreshUser(){
    if(this.currentUser){
      // location.reload()
        }
    
  }

  refresh(){
    location.reload()
    this.ngOnInit()
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/classes/profile/profile';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  profile_details: any;
  gas_info: any;
  diesel_info: any;
  petrol_info: any;
  

  constructor(
    private profileService:ProfileService,
    private router:Router,
    private route:ActivatedRoute, 
    private fuelService:FuelService
    ) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.petrol_info = data
      console.warn("petrol info data:",data)
    });
    this.fuelService.getGasInfo().subscribe((data) => {
      this.gas_info = data
      console.warn("gas info data:",data)
    });
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.diesel_info = data
      console.warn("diesel info data:",data)
    });
  }

  ngOnInit(): void {
    
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

}

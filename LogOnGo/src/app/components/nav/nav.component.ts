import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/classes/profile/profile';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  profile_details: any;
  gas_details: any;

  constructor(private profileService:ProfileService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  profileDetails(){
    this.profileService.getProfileDetails().subscribe((data:Profile) => {
      console.log(data);
      this.profile_details = data ;
    })
  }

}

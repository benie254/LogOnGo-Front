import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/services/notification.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fuels:any;

  constructor(private fuelInfoService:ProfileService, private http:HttpClient,private notifService:NotificationService) { 
    
  }

  toggleInfo(event:any){
    return alert('Hello!')
  }

  addFuelInfo(fuel_info: any) {
    console.warn(fuel_info);
    this.fuelInfoService.addFuel(fuel_info).subscribe((result) => {
      console.warn('result', result);
      this.notifService.submitSuccess('success','Log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });

  }

 
  

  ngOnInit(): void {
  }

}

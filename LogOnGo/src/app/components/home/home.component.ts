import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

declare function myAlert(): any; 
declare function myTester(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fuels: any;
  petrol_details: any;
  myAlert: any; 

  pp = new FormControl('1');

  constructor(private fuelService:FuelService, private http:HttpClient,private notifService:NotificationService) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.petrol_details = data
      console.warn("data",data)
    });
  }

  toggleInfo(event:any){
    return alert('Hello!')
  }

  addFuelInfo(fuel_info: any) {
    console.warn(fuel_info);
    this.fuelService.addFuel(fuel_info).subscribe((result) => {
      console.warn('result', result);
      this.notifService.submitSuccess('success','Log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  updatePetrolInfo(petrol_info:any){
    console.warn(petrol_info);
    this.fuelService.updatePetrolInfo(petrol_info).subscribe((result) => {
      console.warn('updated result',result);
      this.notifService.submitSuccess('success','Petrol info updated successfully!')
    })
  }
  updateDieselInfo(diesel_info:any){
    console.warn(diesel_info);
    this.fuelService.updateDieselInfo(diesel_info).subscribe((result) => {
      console.warn('updated result',result);
      this.notifService.submitSuccess('success','Diesel info updated successfully!')
    })
  }
  updateGasInfo(gas_info:any){
    console.warn(gas_info);
    this.fuelService.updateGasInfo(gas_info).subscribe((result) => {
      console.warn('updated result',result);
      this.notifService.submitSuccess('success','Gas info updated successfully!')
    })
  }

  testerAlert (){
    return alert('hello')
  }



 
  

  ngOnInit():void {
    myAlert();
    myTester();
  }

}

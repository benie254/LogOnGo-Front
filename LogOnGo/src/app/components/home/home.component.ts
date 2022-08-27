import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

declare function myAlert(): any; 
declare function myTester(): any;
declare function myTotal(): any;
declare function amountToday(): any;
declare function getBal(): any;
declare function getBalHome(): any;
declare function myPumps(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fuels: any;
  info: any;
  myAlert: any; 
  logs: any;
  logs_two: any;
  logs_three: any;
  logs_four: any;
  mpesa: any;
  id: number;

  pp = new FormControl('1');

  constructor(private fuelService:FuelService, private http:HttpClient,private notifService:NotificationService, private logService:LogService, private route:ActivatedRoute) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });

    this.logService.getPetrolLogs().subscribe((data) => {
      this.logs = data
      console.warn("data",data)
    });
    this.logService.getPetrolLogs2().subscribe((data) => {
      this.logs_two = data
      console.warn("data",data)
    });
    this.logService.getPetrolLogs3().subscribe((data) => {
      this.logs_three = data
      console.warn("data",data)
    });
    this.logService.getPetrolLogs4().subscribe((data) => {
      this.logs_four = data
      console.warn("data",data)
    });
    this.logService.getMpesaLogs().subscribe((data) => {
      this.mpesa = data
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
    myTotal();
    amountToday();
    getBal();
    getBalHome();
    myPumps();
  }


}

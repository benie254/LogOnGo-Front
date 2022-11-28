import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-add-log-page',
  templateUrl: './add-log-page.component.html',
  styleUrls: ['./add-log-page.component.css']
})
export class AddLogPageComponent implements OnInit {
  fuelInfo: any;
  fuelType: any; 
  fuelId: number;
  fuelReceived: any;
  fuelTotal: any;
  openG: boolean = false;
  openC: boolean = false;
  openM: boolean = false;
  currentUser = this.auth.currentUserValue;
  noFuel: boolean = false;

  constructor(
    private fuel:FuelService,
    private route:ActivatedRoute,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getFuelInfo(params['id']))
    this.route.params.subscribe(params => this.getFuelReceived(params['id']))
  }
  getFuelInfo(id){
    this.fuel.getFuelInfo(id).subscribe({
      next: (res) => {
        this.fuelInfo = res;
        this.fuelType = this.fuelInfo.fuel_type
        this.fuelId = this.fuelInfo.id
      }
    })
  }
  getFuelReceived(id){
    this.fuel.getFuelReceivedInfo(id).subscribe(
      data => {
        this.fuelReceived = data;
        if (this.fuelReceived && this.fuelReceived.length == 0 || this.fuelReceived == undefined || this.fuelReceived.litres_received == null){
          this.noFuel = true;
        } else {
          this.noFuel = false;
        }
      }
    )
  }
  getTotalFuelReceived = (id): void => {
    this.fuel.getTotalFuelReceived(id).subscribe(
      data => {
        this.fuelTotal = data;
      }
    )
  }
  addGen(){
    if(this.openG == false){
      this.openG = true;
      this.openC = false;
      this.openM = false;
    } else{
      this.openG = false;
    }
  }
  close(){
    this.openG = false;
    this.openC = false;
    this.openM = false;
  }
  addCard(){
    if(this.openC == false){
      this.openC = true;
      this.openG = false;
      this.openM = false;
    } else{
      this.openC = false;
    }
  }
  addMpesa(){
    if(this.openM == false){
      this.openM = true;
      this.openC = false;
      this.openG = false;
    } else{
      this.openM = false;
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  noneRcvd: boolean;

  constructor(
    private fuel:FuelService,
    private route:ActivatedRoute,
    private auth:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getFuelInfo(params['id']))
    this.route.params.subscribe(params => this.getFuelReceived(params['id']))
    if(!this.currentUser){
      this.auth.logout();
      this.router.navigate(['/auth'])
    }
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
        if(data == 204 || !data.length || data.litres == null || data == undefined || data.litres == undefined){
          this.noneRcvd = true;
        }else if(data.length || data.litres == !null){
          this.noneRcvd = false;
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

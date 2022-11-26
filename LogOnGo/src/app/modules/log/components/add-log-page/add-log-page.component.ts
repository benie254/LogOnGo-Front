import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private fuel:FuelService,
    private route:ActivatedRoute,
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
  getFuelReceived = (id): void => {
    this.fuel.getFuelReceivedInfo(id).subscribe(
      data => {
        this.fuelReceived = data;
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

}

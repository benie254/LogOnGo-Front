import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-received',
  templateUrl: './fuel-received.component.html',
  styleUrls: ['./fuel-received.component.css']
})
export class FuelReceivedComponent implements OnInit {
  showNew: boolean;
  showInfo: boolean = false;
  @Input() fuelInfo: any;
  @Input() fuelTotal: any;
  @Input() fuelReceived: any;
  @Input() fuelType: any; 
  @Input() fuelId: number;
  @Input() noFuel: boolean = false;
  @Input() noneRcvd: boolean;
  @Input() noTotal: boolean;

  constructor(
  ) { }

  ngOnInit(): void {
  }
  toggleOrderInfo(){
    this.showInfo = true;
    this.showNew = false;
  }
  closeOrder(){
    this.showInfo = false;
  }
  toggleNewOrder(){
    this.showNew = true;
    this.showInfo = false;
  }

}


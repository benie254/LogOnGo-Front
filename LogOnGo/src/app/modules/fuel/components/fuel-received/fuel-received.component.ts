import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-received',
  templateUrl: './fuel-received.component.html',
  styleUrls: ['./fuel-received.component.css']
})
export class FuelReceivedComponent implements OnInit {
  showNew: boolean;
  showInfo: boolean;
  @Input() fuelInfo: any;
  @Input() fuelTotal: any;
  @Input() logs: any;
  @Input() fuelReceived: any;
  @Input() fuelType: any; 
  @Input() fuelId: number;

  constructor(
  ) { }

  ngOnInit(): void {
  }
  toggleOrderInfo(){
    if (this.showInfo = false){
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
  }
  toggleNewOrder(){
    if (this.showNew = false){
      this.showNew = true;
    } else {
      this.showNew = false;
    }
  }

}


import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../services/fuel.service';

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
  @Input() getFuelReceived: (id: number) => void;
  @Input() getTotalFuelReceived: (id: number) => void;

  constructor(
    private route:ActivatedRoute,
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


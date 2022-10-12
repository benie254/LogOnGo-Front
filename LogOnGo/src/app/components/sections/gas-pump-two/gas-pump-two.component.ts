import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-gas-pump-two',
  templateUrl: './gas-pump-two.component.html',
  styleUrls: ['./gas-pump-two.component.css']
})
export class GasPumpTwoComponent implements OnInit {

  logs: Log;
  info: Fuel;
  pumpTwo: Pump;
  closed: boolean;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
    private fuelService:FuelService,
    private pumpService:PumpService,
  ) {
    this.pumpService.getPumpTwoInfo().subscribe(
      (pump_one_data) => {
        this.pumpTwo = pump_one_data;
      }, 
      err => {
        console.warn("pump one get error:",err)
      }
    )
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getGasLogs2(params['id']))
  }

  getGasLogs2(id:number): void{
    this.fuelService.getGasInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
    this.logService.getFuelLogs2(id).subscribe(
      data => {
      this.logs = data
      // this.ngOnInit();
      console.warn('gas_info_today:',data)
      
    },
    error => {
      console.log(error)
    });
  }
  toggleLog(){
    this.closed = true;
  }

}

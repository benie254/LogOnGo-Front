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
  selector: 'app-petrol-pump-one',
  templateUrl: './petrol-pump-one.component.html',
  styleUrls: ['./petrol-pump-one.component.css']
})
export class PetrolPumpOneComponent implements OnInit {
  logs: Log;
  info: Fuel;
  pumpOne: Pump;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
    private fuelService:FuelService,
    private pumpService:PumpService,
  ) {
    this.pumpService.getPumpOneInfo().subscribe(
      (pump_one_data) => {
        this.pumpOne = pump_one_data;
      }, 
      err => {
        console.warn("pump one get error:",err)
      }
    )
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getPetrolLogs(params['id']))
  }

  getPetrolLogs(id:number): void{
    this.logService.getFuelLogs(id).subscribe(
      data => {
      this.logs = data
      // this.ngOnInit();
      console.warn('petrol_info_today:',data)
    },
    error => {
      console.log(error)
    });
  }

}
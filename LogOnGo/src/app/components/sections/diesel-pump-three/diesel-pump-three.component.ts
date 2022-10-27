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
  selector: 'app-diesel-pump-three',
  templateUrl: './diesel-pump-three.component.html',
  styleUrls: ['./diesel-pump-three.component.css']
})
export class DieselPumpThreeComponent implements OnInit {

  logs: Log;
  info: Fuel;
  pumpThree: Pump;
  closed: boolean;
  status: number;
  notFound: boolean = false;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
    private fuelService:FuelService,
    private pumpService:PumpService,
  ) {
    this.pumpService.getPumpThreeInfo().subscribe(
      (pump_one_data) => {
        this.pumpThree = pump_one_data;
      }, 
      err => {
        console.warn("pump one get error:",err)
      }
    )
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getDieselLogs(params['id']))
  }

  getDieselLogs(id:number): void{
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
    this.logService.getFuelLogs3(id).subscribe({
      next: (data) => {
        this.logs = data
      },
      error: (e) => {
        this.status = e.status;
        if(this.status === 404){
          this.notFound = true;
        }
      }
    });
  }

  toggleLog(){
    this.closed = true;
  }
  closeD3(){
    this.closed = false;
  }

}

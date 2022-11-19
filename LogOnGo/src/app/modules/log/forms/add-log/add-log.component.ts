import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { Pump } from 'src/app/classes/pump/pump';
import { CardService } from 'src/app/modules/card/services/card/card.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel.service';
import { LogService } from 'src/app/modules/services/log/log.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {
  logs: Log;
  info: Fuel;
  pumpOne: Pump;
  closed: boolean;
  status: number; 
  notFound: boolean = false;
  fuels: any;
  pumps: any;

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
    // this.fuelService.getPetrolInfo().subscribe((data) => {
    //   this.info = data
    //   console.warn("data",data)
    // });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getPetrolLogs(params['id']))
  }

  getPetrolLogs(id:number): void{
    // this.logService.getFuelLogs(id).subscribe({
    //   next: (data) => {
    //     this.logs = data
    //   },
    //   error: (e) => {
    //     this.status = e.status;
    //     if(this.status === 404){
    //       this.notFound = true;
    //     }
    //   }
    // });
  }
  toggleLog(){
    this.closed = true;
  }
  closeP1(){
    this.closed = false;
  }
  getFuels(){
    this.fuelService.getFuels().subscribe({
      next: (res) => {
        this.fuels = res;
      }
    })
  }
  addLog(logData) {
    this.logService.addLog(logData).subscribe({
      next: (result) => {
        Notiflix.Notify.success('Petrol log added successful!');
      if (this.closed === true){
        this.closed = false;
      } else {
        this.closed = true;
      }
      location.reload();
      }
    });
  }

}

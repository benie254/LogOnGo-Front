import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-petrol-pump-four',
  templateUrl: './petrol-pump-four.component.html',
  styleUrls: ['./petrol-pump-four.component.css']
})
export class PetrolPumpFourComponent implements OnInit {

  logs: Log;
  info: Fuel;
  pumpFour: Pump;
  closed: boolean;
  status: number;
  notFound: boolean = false;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
    private fuelService:FuelService,
    private pumpService:PumpService,
  ) {
    this.pumpService.getPumpFourInfo().subscribe(
      (pump_one_data) => {
        this.pumpFour = pump_one_data;
      }, 
      err => {
        console.warn("pump one get error:",err)
      }
    )
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getPetrolLogs(params['id']))
  }

  getPetrolLogs(id:number): void{
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
    this.logService.getFuelLogs4(id).subscribe({
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
  closeP4(){
    this.closed = false;
  }

}

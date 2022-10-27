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
  selector: 'app-petrol-pump-two',
  templateUrl: './petrol-pump-two.component.html',
  styleUrls: ['./petrol-pump-two.component.css']
})
export class PetrolPumpTwoComponent implements OnInit {

  logs: Log;
  info: Fuel;
  pumpTwo: Pump;
  closed: boolean;
  notFound: boolean = false;
  status: number;
  id: number;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
    private fuelService:FuelService,
    private pumpService:PumpService,
  ) {
    this.pumpService.getPumpTwoInfo().subscribe(
      (pump_two_data) => {
        this.pumpTwo = pump_two_data;
      }
    )
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data;
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getPetrolLogs2(params['id']))
  }

  getPetrolLogs2(id:number): void{
    
    this.logService.getFuelLogs2(id).subscribe({
      next: (data) => {
        this.logs = data
        console.warn('petrol_logs_2_today:',data)
        
      },
      error: (e) => {
        console.error('petrol_logs_2_today error:',e)
        this.status = e.status;
        if(this.status === 404){
          this.notFound = true;
        }
      }
    }
      );
  }
  toggleLog(){
    this.closed = true;
  }
  closeP2(){
    this.closed = false;
  }

}

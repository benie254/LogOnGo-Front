import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-add-diesel-pump-two',
  templateUrl: './add-diesel-pump-two.component.html',
  styleUrls: ['./add-diesel-pump-two.component.css']
})
export class AddDieselPumpTwoComponent implements OnInit {
  pumpTwo: Pump;
  info: Fuel;

  constructor(
    private pumpService:PumpService,
    private fuelService:FuelService,
    private logService:LogService,
  ) { 
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
    this.pumpService.getPumpTwoInfo().subscribe(
      (data) => {
        this.pumpTwo = data;
      }, 
      err => {
        console.warn("pump two get error:",err)
      }
    )
  }

  ngOnInit(): void {
  }

  addLog(log_info: any) {
    console.warn(log_info);
    this.logService.addLog(log_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Petrol log added successful!');
      this.ngOnInit();
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

  

}

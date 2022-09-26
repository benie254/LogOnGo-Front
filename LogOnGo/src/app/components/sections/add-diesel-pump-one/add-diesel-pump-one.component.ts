import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-add-diesel-pump-one',
  templateUrl: './add-diesel-pump-one.component.html',
  styleUrls: ['./add-diesel-pump-one.component.css']
})
export class AddDieselPumpOneComponent implements OnInit {
  pumpOne: Pump;
  dieselInfo: Fuel;
  message: '';

  constructor(
    private pumpService:PumpService,
    private fuelService:FuelService,
    private logService:LogService,
  ) { 
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.dieselInfo = data
      console.warn("diesel_info",data)
      Notiflix.Notify.success('get success-diesel info')
    },
    err => {
      this.message = err 
      Notiflix.Notify.failure('Get failed-diesel info')

    });
    this.pumpService.getPumpOneInfo().subscribe(
      (data) => {
        this.pumpOne = data;
      }, 
      err => {
        alert(err)
        console.warn("pump one get error:",err)
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

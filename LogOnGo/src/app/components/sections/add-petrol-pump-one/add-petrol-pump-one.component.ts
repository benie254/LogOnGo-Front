import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-add-petrol-pump-one',
  templateUrl: './add-petrol-pump-one.component.html',
  styleUrls: ['./add-petrol-pump-one.component.css']
})
export class AddPetrolPumpOneComponent implements OnInit {
  pumpOne: Pump;
  info: Fuel;
  date = new Date();

  constructor(
    private pumpService:PumpService,
    private fuelService:FuelService,
    private logService:LogService,
  ) {
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
    this.pumpService.getPumpOneInfo().subscribe(
      (data) => {
        this.pumpOne = data;
      }, 
      err => {
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

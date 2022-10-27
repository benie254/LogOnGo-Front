import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  info: Fuel;
  closed: boolean;
  errMsg = '';
  errDate = '';
  errEOD = '';
  statusText = '';
  

  constructor(
    private pumpService:PumpService,
    private fuelService:FuelService,
    private logService:LogService,
    private fb:FormBuilder,
  ) { 
    this.fuelService.getDieselInfo().subscribe({
      next: (data) => {
      this.info = data
      console.warn("data",data)
      }
    });
    this.pumpService.getPumpOneInfo().subscribe({
      next: (data) => {
        this.pumpOne = data;
      }
    })
  }

  ngOnInit(): void {
  }

  addLog(logData) {
    this.logService.addLog(logData).subscribe({
      next: (result) => {
        Notiflix.Notify.success('Diesel log added successful!');
        this.ngOnInit();
      if (this.closed === true){
        this.closed = false;
      } else {
        this.closed = true;
      }
      location.reload();
      }, 
      error: (err) => {
        this.errMsg = err.error.detail;
        this.statusText = err.statusText;
        this.errEOD = err.error.eod_reading_lts;
        this.errDate = err.error.date;
        if(this.errMsg && this.statusText){
          Notiflix.Report.failure(
            this.statusText,
            this.errMsg,
            'Okay',
          )
        } else if(this.statusText && this.errEOD || this.errDate){
          Notiflix.Report.failure(
            this.statusText,
            'Please fix the highlighted errors and try again.',
            'Okay',
          )
        } else if(this.statusText) {
          Notiflix.Report.failure(
            this.statusText,
            'Something went wrong as we attempted to add your log record. Please try again.',
            'Okay',
          )
        } else {
          Notiflix.Notify.failure('Failed to add log.')
          Notiflix.Notify.warning('Please try again!')
        }
        
      }
    });
  }
  toggleLog(){
    this.closed = true;
  }
  closeForm(){
    if (this.closed === true){
      this.closed = false;
    } else {
      this.closed = true;
    }
  }


}

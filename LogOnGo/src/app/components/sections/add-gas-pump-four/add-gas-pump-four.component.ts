import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { PumpService } from 'src/app/services/pump/pump.service';

@Component({
  selector: 'app-add-gas-pump-four',
  templateUrl: './add-gas-pump-four.component.html',
  styleUrls: ['./add-gas-pump-four.component.css']
})
export class AddGasPumpFourComponent implements OnInit {
  pumpFour: Pump;
  info: Fuel;
  closed: boolean;
  logForm = this.fb.group({
    date: ['', [Validators.required]],
    fuel: 0,
    pump: 0,
    eod_reading_lts: [0, [Validators.required]],
 });

  constructor(
    private pumpService:PumpService,
    private fuelService:FuelService,
    private logService:LogService,
    private fb:FormBuilder,
  ) { 
    this.fuelService.getGasInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
    this.pumpService.getPumpFourInfo().subscribe(
      (data) => {
        this.pumpFour = data;
      }, 
      err => {
        console.warn("pump four get error:",err)
      }
    )
  }

  ngOnInit(): void {
  }

  addLog() {
    console.warn();
    this.logService.addLog(this.logForm.value).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Gas log added successful!');
      this.ngOnInit();
      if (this.closed === true){
        this.closed = false;
      } else {
        this.closed = true;
      }
      location.reload();
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
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

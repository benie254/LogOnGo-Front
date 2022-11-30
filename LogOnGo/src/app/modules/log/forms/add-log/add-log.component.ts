import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {
  @Input() fuelInfo: any;
  currentUser = this.auth.currentUserValue;
  logs: Log;
  info: Fuel;
  closed: boolean;
  status: number; 
  notFound: boolean = false;
  fuels: any;
  pumps: any;
  id: number; 
  yesterday: any;
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();

  constructor(
    private log:LogService,
    private fuel:FuelService,
    private route:ActivatedRoute,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.yesterdayLogs(params['id']))
  }
  
  toggleLog(){
    this.closed = true;
  }
  closeP1(){
    this.closed = false;
  }
  getFuels(){
    this.fuel.getFuels().subscribe({
      next: (res) => {
        this.fuels = res;
      }
    })
  }
  addLog(logData) {
    Notiflix.Loading.hourglass('Adding... please wait.')
    this.log.addLog(logData).subscribe({
      next: (result) => {
        Notiflix.Notify.success('Log added successful!');
        Notiflix.Loading.remove();
        location.reload();
      }
    });
  }
  yesterdayLogs(id){
    this.log.getYesterdayLogs(id).subscribe({
      next: (res) => {
        this.yesterday = res;
      }
    })
  }
  

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {
  updateConfirmed: boolean = false;
  closed: boolean = false;
  fuelName= '';
  @Input() viewMode = false;
  
  message = '';
  logs: Log;
  logId: number;
  yesterday_logs: any;
  petrol_received_info: any;
  fuels:Fuel;
  currentUser = this.authService.currentUserValue;
  diesel_received: any;
  gas_received: any;
  petrol_received: any;
  diesel_received_info: any;
  gas_received_info: any;
  hideDiesel: boolean = false;
  hidePetrol: boolean = false;
  hideGas: boolean = false;
  delConfirmed: boolean = false;
  errMsg = '';
  errEOD = '';
  errDate = '';
  statusText = '';
  closedF: boolean = true;

  constructor(
    private route:ActivatedRoute, 
    private logService:LogService,
    private router:Router,
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']))
    this.logId = this.route.snapshot.params['id'];
  }
  getLogDetails = (id:number): void => {
    this.logService.getLogDetails(id).subscribe({
      next: (data) => {
        this.logs = data;
        this.fuelName = this.logs.fuel_name
      }
    });
  }
  updateLogDetails(logData){
    this.logService.updateLogInfo(this.logId,logData).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
        }
      });
  }

  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to edit this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Remember",
          "We keep records of all updates.",
          "Okay",
        )
        this.updateConfirmed = true;
        this.closed = false;
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.updateConfirmed = false;
      }
    )
  }
  toggleUpdateForm(){
    this.closed = true;
  }
  closeForm(){
    this.closed = true;
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "We will send this request to the administration.",
          "Okay",
        )
        this.delConfirmed = true;
        this.router.navigate(['/delete-log/' + this.logId])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }
}


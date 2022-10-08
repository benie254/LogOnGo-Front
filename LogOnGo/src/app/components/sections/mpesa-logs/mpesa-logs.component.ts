import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-mpesa-logs',
  templateUrl: './mpesa-logs.component.html',
  styleUrls: ['./mpesa-logs.component.css']
})
export class MpesaLogsComponent implements OnInit {
  mpesa: any;
  mpesa_cumulative: any;
  mpesa_logs: any;
  present: boolean;
  noMpesa: boolean;
  show: boolean;
  constructor(
    private mpesaService:LogMpesaService,
  ) {
    this.mpesaService.getTodayMpesaLogs().subscribe(
      (data) => {
        this.mpesa_logs = data;
        this.present = true;
        Notiflix.Notify.success('mpesa success')
        console.warn(this.mpesa_logs)
        if (this.mpesa_logs.length == undefined || this.mpesa_logs && this.mpesa_logs == 0 ){
          this.noMpesa = true;
        }
      },
      err => {
        Notiflix.Notify.failure('couldnt get mpesa')
      }
    )
   }

  ngOnInit(): void {

  }
  toggleMpesa(){
    this.show = true;
  }
  close(){
    this.show = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  noMpesa: boolean = false;
  show: boolean;
  id: number;
  error = ''
  constructor(
    private mpesaService:LogMpesaService,
    private route:ActivatedRoute,
    
  ) {
    // if(this.mpesa_logs){
    //   this.noMpesa = false;
    // } else {
    //   this.noMpesa = true;
    // }
    if (this.mpesa_logs == undefined || this.mpesa_logs.length == undefined || this.mpesa_logs && this.mpesa_logs.length == 0 ){
      this.noMpesa = true;
    }
    
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getMpesa();
  }
  getMpesa(){
    this.mpesaService.getTodayMpesaLogs(this.id).subscribe(
      (data) => {
        this.mpesa_logs = data;
        this.present = true;
        Notiflix.Notify.success('mpesa success')
        console.warn("mpesa data:",this.mpesa_logs)
        if (this.mpesa_logs == undefined || this.mpesa_logs.length == undefined || this.mpesa_logs && this.mpesa_logs.length == 0 ){
          this.noMpesa = true;
        }
      },
      err => {
        Notiflix.Notify.failure('couldnt get mpesa')
        this.noMpesa = true;
        this.error = err;
        console.warn("error:",err)
      }
    )
  }
  toggleMpesa(){
    this.show = true;
  }
  close(){
    this.show = false;
  }

}

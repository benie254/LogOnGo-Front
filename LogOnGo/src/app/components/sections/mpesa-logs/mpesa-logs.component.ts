import { Component, OnInit } from '@angular/core';
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
  constructor(
    private mpesaService:LogMpesaService,
  ) {
    this.mpesaService.getTodayMpesaLogs().subscribe(
      (data) => {
        this.mpesa_logs = data;
      }
    )
   }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-all-mpesa-card',
  templateUrl: './all-mpesa-card.component.html',
  styleUrls: ['./all-mpesa-card.component.css']
})
export class AllMpesaCardComponent implements OnInit {
  mpesa_logs: any;

  constructor(
    private mpesaService:LogMpesaService,
  ) {
    this.mpesaService.getAllMpesaLogs().subscribe(
      (data) => {
      this.mpesa_logs = data
      console.warn("data",data)
    });
   }

  ngOnInit(): void {
  }

}

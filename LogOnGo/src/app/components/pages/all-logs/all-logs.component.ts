import { Component, OnInit } from '@angular/core';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-all-logs',
  templateUrl: './all-logs.component.html',
  styleUrls: ['./all-logs.component.css']
})
export class AllLogsComponent implements OnInit {
  mpesa_logs: any;
  logs: any;
  
  constructor(
    private mpesaService:LogMpesaService,
    private logService:LogService,
  ) { 
   
    this.mpesaService.getAllMpesaLogs().subscribe(
      (data) => {
      this.mpesa_logs = data
      console.warn("all mpesa data",data)
    });
    
  }

  ngOnInit(): void {
  }

}

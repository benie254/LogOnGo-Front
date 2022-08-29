import { Component, OnInit } from '@angular/core';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-all-logs',
  templateUrl: './all-logs.component.html',
  styleUrls: ['./all-logs.component.css']
})
export class AllLogsComponent implements OnInit {
  all_logs: any;
  all_mpesa_logs: any;

  constructor(private logService:LogService,private mpesaService:LogMpesaService) { 
    this.logService.getAllLogs().subscribe((data) => {
      this.all_logs = data
      console.warn("data",data)
    });

    this.mpesaService.getAllMpesaLogs().subscribe((data) => {
      this.all_mpesa_logs = data
      console.warn("data",data)
    });
  }

  ngOnInit(): void {
  }

}

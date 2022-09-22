import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-print-logs',
  templateUrl: './print-logs.component.html',
  styleUrls: ['./print-logs.component.css']
})
export class PrintLogsComponent implements OnInit {
  petrol_info: any; 
  yesterday_petrol_logs: any;
  log_details: Log; 
  petrol_received: any;
  logs: Log;

  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']))
  }

  getLogDetails(id:number){
    this.logService.getLogDetails(id).subscribe((data) => {
      this.log_details = data
      console.warn("log details",data)
      Notiflix.Notify.success('Get success')
    },
    err => {
      console.warn(err)
      Notiflix.Notify.failure('Something went wrong!')
    }
    );
  }

}

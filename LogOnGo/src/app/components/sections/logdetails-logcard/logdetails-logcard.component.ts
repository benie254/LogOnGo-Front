import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-logdetails-logcard',
  templateUrl: './logdetails-logcard.component.html',
  styleUrls: ['./logdetails-logcard.component.css']
})
export class LogdetailsLogcardComponent implements OnInit {
  logs: any; 
  info: any;
  petrol_info: any;
  id: number;
  yesterday_logs: any;
  petrol_received_info: any;

  constructor(private route:ActivatedRoute, private logService:LogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDETAILS(params['id']))
  }

  getLogDETAILS(id:number){
    this.logService.getLogDetails(id).subscribe(
      (data) => {
      this.logs = data
      console.warn("log details 2",data)
      Notiflix.Notify.success('Get success!')
    },
    err => {
      Notiflix.Notify.failure('Something went wrong!')
      console.warn(err)
    }
    );
  }

}

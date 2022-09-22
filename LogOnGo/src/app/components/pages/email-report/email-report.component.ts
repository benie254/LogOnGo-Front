import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-email-report',
  templateUrl: './email-report.component.html',
  styleUrls: ['./email-report.component.css']
})
export class EmailReportComponent implements OnInit {
  petrol_info: any; 
  yesterday_petrol_logs: any; 
  petrol_received: any; 
  log_details: any;
  user: any; 
  // emailReport: any;
  currentUser = this.authService.currentUserValue;

  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
    private authService:AuthService,
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

  emailReport(){
    
  }

}

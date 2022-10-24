import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-delete-log',
  templateUrl: './delete-log.component.html',
  styleUrls: ['./delete-log.component.css']
})
export class DeleteLogComponent implements OnInit {
  delConfirmed: boolean = false;
  closed: boolean = false;
  id: number;
  logs: any;
  today = new Date().toDateString();
  currentUser: any;
  logData: any;
  isExpanded: boolean = false;
  panelOpenState = false;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
    private authService:AuthService,
  ) { 
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']));
  }
  getLogDetails(id:number){
    this.logService.getLogDetails(id).subscribe((data) => {
      this.logs = data
      console.warn("log details",data)
      // Notiflix.Notify.success('Get success')
      
     
    },
    err => {
      console.warn(err)
      // Notiflix.Notify.failure('Something went wrong!')
    }
    );
  }
  delRequest(logData){
    Notiflix.Loading.hourglass('Sending request...')
    this.logService.deleteLog(logData).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            "Request sent!",
            "Your delete request has been delivered to the administration.",
            "Okay",
          )
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => {
          console.error(e)
          Notiflix.Loading.remove();
          Notiflix.Report.failure(
            "Request failed!",
            "Something went wrong as we attempted to send your delete request to the administration.",
            "Okay",
          )
        } 
      }
    )
  }
  

}

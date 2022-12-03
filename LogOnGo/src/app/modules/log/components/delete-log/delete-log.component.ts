import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { LogService } from '../../services/log/log.service';

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
    private log:LogService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
  ) { 
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']));
  }
  getLogDetails(id:number){
    this.log.getLogDetails(id).subscribe((data) => {
      this.logs = data
      console.warn("log details",data)
      // Notiflix.Notify.success('Get success')
      
     
    });
  }
  delRequest(logData){
    Notiflix.Loading.hourglass('Sending request...')
    this.log.deleteLog(logData).subscribe(
      {
        next: (res) => {
          Notiflix.Loading.remove();
          console.log(res);
          Notiflix.Report.success(
            "Request sent!",
            "Your delete request has been delivered to the administration. Please check your email for a follow-up.",
            "Okay",
          );
          history.back();
        }
      }
    )
  }
  

}

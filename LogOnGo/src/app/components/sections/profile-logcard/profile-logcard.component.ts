import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-profile-logcard',
  templateUrl: './profile-logcard.component.html',
  styleUrls: ['./profile-logcard.component.css']
})
export class ProfileLogcardComponent implements OnInit {
  user_logs: any;

  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getUserLogs(params['id']))
  }

  getUserLogs(id:number): void{
    this.logService.getUserLogs(id).subscribe(
      (data) => {
      this.user_logs = data
      // this.ngOnInit();
      console.warn('user_logs:',data)
    },
    error => {
      console.log(error)
      Notiflix.Notify.failure('Something went wrong!');
    });
  }


}

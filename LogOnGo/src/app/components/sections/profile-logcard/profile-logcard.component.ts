import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-profile-logcard',
  templateUrl: './profile-logcard.component.html',
  styleUrls: ['./profile-logcard.component.css']
})
export class ProfileLogcardComponent implements OnInit {
  user_logs: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  id: number;

  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getUserLogs();
  }
  
  getUserLogs(): void{
    this.logService.getUserLogs(this.id).subscribe(
      data => {
      this.user_logs = data
      console.warn('user_logs:',data)
    },
    error => {
      console.log(error)
      Notiflix.Notify.failure('Something went wrong!');
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getUserLogs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUserLogs();
  }


}

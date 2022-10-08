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
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [2, 5, 10, 15];
  id: number;

  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => this.getUserLogs(params['id']));
    this.id = this.route.snapshot.params['id'];
    this.getUserLogs;
    
  }

  getUserLogs(): void{
    this.logService.getUserLogs(this.id).subscribe(
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

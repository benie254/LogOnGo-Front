import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-profile-log-card',
  templateUrl: './profile-log-card.component.html',
  styleUrls: ['./profile-log-card.component.css']
})
export class ProfileLogCardComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  userLogs: any;
  id: number;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.route.params.subscribe(params => this.getUserLogs(params['id']))
  }
  getUserLogs = (id: number): void => {
    this.logService.getUserLogs(id).subscribe(
      data => {
        this.userLogs = data;
      }
    )
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getUserLogs(this.id);
  }
  onTableSizeChange = (event: any): void => {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUserLogs(this.id);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Log } from 'src/app/classes/log/log';
import { User } from 'src/app/classes/user/user';

@Component({
  selector: 'app-logs-card',
  templateUrl: './logs-card.component.html',
  styleUrls: ['./logs-card.component.css']
})
export class LogsCardComponent implements OnInit {
  @Input() searchText: any;
  @Input() logs: any;
  @Input() currentUser: User;
  @Input() page: number; 
  @Input() count: number; 
  @Input() tableSize: number = 4; 
  @Input() tableSizes: number; 
  @Input() getAllLogs: () => void;
  @Input() onTableDataChange: (event: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

}

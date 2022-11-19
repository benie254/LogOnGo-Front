import { Component, OnInit, Input } from '@angular/core';
import { Log } from 'src/app/classes/log/log';

@Component({
  selector: 'app-logs-card',
  templateUrl: './logs-card.component.html',
  styleUrls: ['./logs-card.component.css']
})
export class LogsCardComponent implements OnInit {
  @Input() logs: any;
  @Input() userLogs: any;
  @Input() page: number; 
  @Input() count: number; 
  @Input() tableSize: number; 
  @Input() tableSizes: number; 
  @Input() getAllLogs: () => void;
  @Input() getUserLogs: (id: number) => void;
  @Input() getFuelLogs: (id: number) => void;
  @Input() onTableDataChange: (event: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

}

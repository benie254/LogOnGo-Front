import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-no-logs',
  templateUrl: './no-logs.component.html',
  styleUrls: ['./no-logs.component.css']
})
export class NoLogsComponent implements OnInit {
  closed: boolean;
  show: boolean;
  
  constructor() { }
   
  ngOnInit(): void {
  }
  toggleLog(){
    this.show = true;
  }
  close(){
    this.show = false;
  }
}


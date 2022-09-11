import { Component, OnInit } from '@angular/core';

declare function toggleLog(): any;

@Component({
  selector: 'app-no-logs',
  templateUrl: './no-logs.component.html',
  styleUrls: ['./no-logs.component.css']
})
export class NoLogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

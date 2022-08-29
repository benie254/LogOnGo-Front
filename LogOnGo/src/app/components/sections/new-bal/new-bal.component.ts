import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bal',
  templateUrl: './new-bal.component.html',
  styleUrls: ['./new-bal.component.css']
})
export class NewBalComponent implements OnInit {
  yesterday_logs: any;

  constructor() { }

  ngOnInit(): void {
  }

}

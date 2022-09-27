import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-details-btn',
  templateUrl: './details-btn.component.html',
  styleUrls: ['./details-btn.component.css']
})
export class DetailsBtnComponent implements OnInit {
  logs: any;

  constructor(
    private logService:LogService,
    ) { 
    this.logService.getAllLogs().subscribe((data) => {
      this.logs = data
      console.warn("data",data)
    });
  }

  

  ngOnInit(): void {
  }

}

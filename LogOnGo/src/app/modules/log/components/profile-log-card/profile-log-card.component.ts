import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-profile-log-card',
  templateUrl: './profile-log-card.component.html',
  styleUrls: ['./profile-log-card.component.css']
})
export class ProfileLogCardComponent implements OnInit {
  @Input() userLogs: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  id: number;

  constructor(
    private logService:LogService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
  }
 
}

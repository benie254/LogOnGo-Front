import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MpesaService } from 'src/app/modules/services/mpesa/mpesa.service';

@Component({
  selector: 'app-profile-mpesa',
  templateUrl: './profile-mpesa.component.html',
  styleUrls: ['./profile-mpesa.component.css']
})
export class ProfileMpesaComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  userMpesa: any;
  id: number;

  constructor(
    private mpesaService:MpesaService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.route.params.subscribe(params => this.getUserMpesa(params['id']))
  }
  getUserMpesa = (id: number): void => {
    this.mpesaService.getUserMpesaLogs(id).subscribe(
      data => {
        this.userMpesa = data;
      }
    )
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getUserMpesa(this.id);
  }
  onTableSizeChange = (event: any): void => {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUserMpesa(this.id);
  }
}


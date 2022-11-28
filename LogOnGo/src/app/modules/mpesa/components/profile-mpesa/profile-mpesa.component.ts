import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MpesaService } from '../../services/mpesa/mpesa.service';

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
  id: number;
  @Input() userMpesa: any;

  constructor() { }

  ngOnInit(): void {
  }
}


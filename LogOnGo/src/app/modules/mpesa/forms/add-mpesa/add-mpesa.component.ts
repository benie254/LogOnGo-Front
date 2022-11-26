import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { MpesaService } from '../../services/mpesa/mpesa.service';

@Component({
  selector: 'app-add-mpesa',
  templateUrl: './add-mpesa.component.html',
  styleUrls: ['./add-mpesa.component.css']
})
export class AddMpesaComponent implements OnInit {
  user: any;
  default: number = 0;
  @Input() currentUser: any;
  @Input() fuelInfo: any;
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();

  constructor(
    private mpesaService:MpesaService, 
    ) { }

  addMpesaLog(mpesa_info) {
    Notiflix.Loading.hourglass('Adding... please wait.')
    this.mpesaService.addMpesaLog(mpesa_info).subscribe({
      next: (result) => {
      Notiflix.Notify.success('Mpesa Log added successfully!');
      Notiflix.Loading.remove();
      location.reload();
    }});
  }

  ngOnInit(): void {
    
  }


}

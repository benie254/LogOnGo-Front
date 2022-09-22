import { Component, OnInit } from '@angular/core';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-mpesa-logdetails',
  templateUrl: './mpesa-logdetails.component.html',
  styleUrls: ['./mpesa-logdetails.component.css']
})
export class MpesaLogdetailsComponent implements OnInit {

  constructor(
    private mpesaService:LogMpesaService
  ) { }

  ngOnInit(): void {
  }

  getLogDetails(id:number){
    this.mpesaService.getLogDetails(id).subscribe((data) => {
      this.logs = data
      console.warn("log details",data)
      Notiflix.Notify.success('Get success')
    },
    err => {
      console.warn(err)
      Notiflix.Notify.failure('Something went wrong!')
    }
    );
  }

}

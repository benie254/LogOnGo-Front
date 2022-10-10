import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-diesel-mpesa',
  templateUrl: './diesel-mpesa.component.html',
  styleUrls: ['./diesel-mpesa.component.css']
})
export class DieselMpesaComponent implements OnInit {

  mpesa: any;
  mpesa_cumulative: any;
  mpesa_logs: any;
  present: boolean;
  noMpesa: boolean;
  show: boolean;
  id: number;
  constructor(
    private mpesaService:LogMpesaService,
    private route:ActivatedRoute,
  ) {
    this.mpesaService.getTodayMpesaLogs(this.id).subscribe(
      (data) => {
        this.mpesa_logs = data;
        this.present = true;
        Notiflix.Notify.success('mpesa success')
        console.warn(this.mpesa_logs)
        if (this.mpesa_logs.length == undefined || this.mpesa_logs && this.mpesa_logs == 0 ){
          this.noMpesa = true;
        }
      },
      err => {
        Notiflix.Notify.failure('couldnt get mpesa')
      }
    )
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
  }
  toggleMpesa(){
    this.show = true;
  }
  close(){
    this.show = false;
  }

}

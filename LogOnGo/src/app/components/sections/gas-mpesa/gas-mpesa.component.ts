import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-gas-mpesa',
  templateUrl: './gas-mpesa.component.html',
  styleUrls: ['./gas-mpesa.component.css']
})
export class GasMpesaComponent implements OnInit {

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
        console.warn(this.mpesa_logs)
        if (this.mpesa_logs.length == undefined || this.mpesa_logs && this.mpesa_logs == 0 ){
          this.noMpesa = true;
        }
      },
      err => {
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MpesaService } from 'src/app/modules/services/mpesa/mpesa.service';

@Component({
  selector: 'app-print-mpesa',
  templateUrl: './print-mpesa.component.html',
  styleUrls: ['./print-mpesa.component.css']
})
export class PrintMpesaComponent implements OnInit {
  mpesaDetails: any; 
  mpesa_total: any; 
  mpesa_cumulative: any;

  constructor(
    private mpesaService:MpesaService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
  }

  getMpesaLogDetails(id:number){
    this.mpesaService.getMpesaLogDetails(id).subscribe(
      (data) => {
        this.mpesaDetails = data
        console.warn("mpesa log details",data)
      },
      err => {
        console.warn(err)
      }
    );
  }

}


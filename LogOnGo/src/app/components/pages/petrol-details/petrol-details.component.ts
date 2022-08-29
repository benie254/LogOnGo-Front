import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-petrol-details',
  templateUrl: './petrol-details.component.html',
  styleUrls: ['./petrol-details.component.css']
})
export class PetrolDetailsComponent implements OnInit {
  logs: any;
  id: number;
  yesterday_logs: any;
  petrol_received_info: any;

  constructor(private route:ActivatedRoute, private logService:LogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getPetrolLogDetails(params['id']))
  }

  getPetrolLogDetails(id:number){
    this.logService.getPetrolLogDetails(id).subscribe((data) => {
      this.logs = data
      console.warn("data",data)
    });
  }

}

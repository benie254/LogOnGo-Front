import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuelService } from '../../services/fuel/fuel.service';

@Component({
  selector: 'app-fuel-received-info',
  templateUrl: './fuel-received-info.component.html',
  styleUrls: ['./fuel-received-info.component.css']
})
export class FuelReceivedInfoComponent implements OnInit {
  @Input() fuelReceived: any;
  @Input() fuelTotal: any;
  @Input() fuelType: any; 
  @Input() fuelId: number;

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }
  


}


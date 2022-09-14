import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  info: any;

  constructor(private fuelService:FuelService, private router:Router) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("petrol info data:",data)
    });
  }

  ngOnInit(): void {
  }

  goToPetrolLogs(id){
    this.router.navigate(['/petrol',id])
  }

}

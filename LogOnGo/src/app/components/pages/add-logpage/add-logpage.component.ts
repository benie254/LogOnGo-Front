import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-add-logpage',
  templateUrl: './add-logpage.component.html',
  styleUrls: ['./add-logpage.component.css']
})
export class AddLogpageComponent implements OnInit {
  petrolInfo: any;
  dieselInfo: any;
  gasInfo: any;
  hideP1: boolean = false;
  hideP2: boolean = false;
  hideP3: boolean = false;
  hideP4: boolean = false;

  constructor(
    private fuelS:FuelService,
  ) {
    this.fuelS.getPetrolInfo().subscribe({
      next: (res) => {
        this.petrolInfo = res;
      }
    });
    this.fuelS.getDieselInfo().subscribe({
      next: (res) => {
        this.dieselInfo = res;
      }
    });
    this.fuelS.getGasInfo().subscribe({
      next: (res) => {
        this.gasInfo = res;
      }
    });
    // let pPumps = document.getElementById('petrolPs').textContent;
    // if(pPumps == '1'){
    //   this.hideP1 = false;
    //   this.hideP2 = true;
    //   this.hideP3 = true;
    //   this.hideP4 = true;
    // } else if(pPumps == '2'){
    //   this.hideP1 = false;
    //   this.hideP2 = false;
    //   this.hideP3 = true;
    //   this.hideP4 = true;
    // } else if(pPumps == '3'){
    //   this.hideP1 = false;
    //   this.hideP2 = false;
    //   this.hideP3 = false;
    //   this.hideP4 = true;
    // } else if(pPumps == '4'){
    //   this.hideP1 = false;
    //   this.hideP2 = false;
    //   this.hideP3 = false;
    //   this.hideP4 = false;
    // }
   }

  ngOnInit(): void {
  }

}

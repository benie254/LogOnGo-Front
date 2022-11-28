import { Component, Input, OnInit } from '@angular/core';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-all-fuels-received',
  templateUrl: './all-fuels-received.component.html',
  styleUrls: ['./all-fuels-received.component.css']
})
export class AllFuelsReceivedComponent implements OnInit {
  @Input() reload: () => void;
  myModel = 'Fuel Received';
  @Input() myList: any;
  @Input() id: any;
  @Input() admins: any;
  @Input() copy: (text: number) => void;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;
  @Input() allFuels: any;

  constructor(
    private fuel:FuelService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
  }
  
  allRecords(){
    this.fuel.getAllFuelReceived().subscribe({
      next: (res) => {
        this.myList = res;
      }
    })
  }
  openForm = (): void => {
    this.showData = true;
    this.hideContent = true;
    this.showEdit = false;
  }
  redirect = (): void => {
    setTimeout(() => {
      this.openForm();
    }, 250)
  }
  reset = (): void => {
    const form = (<HTMLFormElement>document.getElementById('fuelRcvdForm'));
    setTimeout(() => {
      form.reset();
    }, 250)
  }
  close(){
    this.showData = false;
    this.hideContent = false;
    this.showEdit = false;
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }
}


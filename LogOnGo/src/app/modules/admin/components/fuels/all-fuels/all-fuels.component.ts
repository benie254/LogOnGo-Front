import { Component, Input, OnInit } from '@angular/core';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-all-fuels',
  templateUrl: './all-fuels.component.html',
  styleUrls: ['./all-fuels.component.css']
})
export class AllFuelsComponent implements OnInit {
  @Input() reload: () => void;
  myModel = 'Fuel';
  @Input() myList: any;
  @Input() id: any;
  @Input() admins: any;
  @Input() copy: (text: number) => void;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;

  constructor(
    private fuel:FuelService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
  }
  
  allRecords(){
    this.fuel.getFuels().subscribe({
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
    const form = (<HTMLFormElement>document.getElementById('fuelForm'));
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

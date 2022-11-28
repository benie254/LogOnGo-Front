import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-add-fuel-received',
  templateUrl: './add-fuel-received.component.html',
  styleUrls: ['./add-fuel-received.component.css']
})
export class AddFuelReceivedComponent implements OnInit {
  @Input() admins: any;
  @Input() reset: () => void;
  @Input() reload: () => void;
  @Input() fuels: any;
  @Input() allFuels: any;

  constructor(
    private fuel:FuelService,
  ) { }

  ngOnInit(): void {
  }
  addFuelReceived(data){
    this.fuel.addFuelReceived(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('add success');
      }
    })
  }
}
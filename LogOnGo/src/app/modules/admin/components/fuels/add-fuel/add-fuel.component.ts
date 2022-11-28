import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-add-fuel',
  templateUrl: './add-fuel.component.html',
  styleUrls: ['./add-fuel.component.css']
})
export class AddFuelComponent implements OnInit {
  @Input() admins: any;
  @Input() reset: () => void;
  @Input() reload: () => void;
  @Input() fuels: any;

  constructor(
    private fuel:FuelService,
  ) { }

  ngOnInit(): void {
  }
  addFuel(data){
    this.fuel.addFuel(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('add success');
      }
    })
  }
}

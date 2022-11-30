import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { FuelReceived } from 'src/app/classes/fuel-received/fuel-received';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-add-fuel-received',
  templateUrl: './add-fuel-received.component.html',
  styleUrls: ['./add-fuel-received.component.css']
})
export class AddFuelReceivedComponent implements OnInit, OnDestroy {
  @Input() admins: User;
  @Input() reset: () => void;
  @Input() reload: () => void;
  @Input() fuels: any;
  @Input() allFuels: Fuel;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fuel:FuelService,
  ) { }

  ngOnInit(): void {
  }
  addFuelReceived(data: FuelReceived){
    this.fuel.addFuelReceived(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Added!');
      }
    })
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
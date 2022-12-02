import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { FuelReceived } from 'src/app/classes/fuel-received/fuel-received';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-fuel-received',
  templateUrl: './add-fuel-received.component.html',
  styleUrls: ['./add-fuel-received.component.css']
})
export class AddFuelReceivedComponent implements OnInit, OnDestroy {
  @Input()
  admins!: User;
  @Input()
  reset!: () => void;
  @Input()
  reload!: () => void;
  @Input() fuels: any;
  @Input()
  allFuels!: Fuel;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
  }
  addFuelReceived(data: FuelReceived){
    this.service.addFuelReceived(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
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
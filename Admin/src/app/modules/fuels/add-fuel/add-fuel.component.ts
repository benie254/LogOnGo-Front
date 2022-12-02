import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-fuel',
  templateUrl: './add-fuel.component.html',
  styleUrls: ['./add-fuel.component.css']
})
export class AddFuelComponent implements OnInit, OnDestroy {
  @Input()
  admins!: User;
  @Input()
  reset!: () => void;
  @Input()
  reload!: () => void;
  @Input() fuels: any;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
  }
  addFuel(data: Fuel){
    this.service.addFuel(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
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

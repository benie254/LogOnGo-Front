import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-all-incidents',
  templateUrl: './all-incidents.component.html',
  styleUrls: ['./all-incidents.component.css']
})
export class AllIncidentsComponent implements OnInit, OnDestroy {
  @Input() reload: () => void;
  myModel = 'Incident';
  @Input() myList: any;
  @Input() id: any;
  @Input() admins: any;
  @Input() copy: (text: number) => void;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;
  private unsubscribe$ = new Subject<void>();


  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
  }
  allRecords(){
    this.service.getIncidentReports().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        this.myList = res;
      }
    })
  }
  close(){
    this.hideContent = false;
    this.showEdit = false;
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

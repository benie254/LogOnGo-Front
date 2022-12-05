import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { CardService } from 'src/app/modules/card/services/card/card.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';
import { MpesaService } from 'src/app/modules/mpesa/services/mpesa/mpesa.service';
import { LogService } from '../../services/log/log.service';

@Component({
  selector: 'app-fuel-logs',
  templateUrl: './fuel-logs.component.html',
  styleUrls: ['./fuel-logs.component.css']
})
export class FuelLogsComponent implements OnInit {
  messages: string[] = [];
  fLogs: any;
  id: number;
  fuelInfo: any;
  yesterday: any;
  date = new Date();
  fuelMpesa: any;
  fuelCards: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 5, 10, 15];
  currentUser: any;
  fuelId: any;

  constructor(
    private log:LogService,
    private route:ActivatedRoute,
    private fuel:FuelService,
    private mpesa:MpesaService,
    private authService:AuthService,
    private card:CardService,
    private detector: ChangeDetectorRef,
    private router:Router,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getFuelMpesa(params['id']))
    this.route.params.subscribe(params => this.getFuelInfo(params['id']))
    this.route.params.subscribe(params => this.fuelLogs(params['id']))
    this.route.params.subscribe(params => this.getFuelCards(params['id']))
    
    this.detector.detectChanges();
  }
  getFuelInfo = (id: number): void => {
    this.fuel.getFuelInfo(id).subscribe({
      next: (res) => {
        this.fuelInfo = res;
        this.fuelId = res.id;
      }
    })
  }
  fuelLogs = (id): void => {
    Notiflix.Loading.dots('Loading...')
    this.log.getFuelLogs(id).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.fLogs = res;
      }
    });
  }
  getFuelMpesa = (id: number): void => {
    Notiflix.Loading.dots('Loading...')
    this.mpesa.getTodayMpesaLogs(id).subscribe(
      data => {
        Notiflix.Loading.remove();
        this.fuelMpesa = data;
      }
    )
  }
  getFuelCards = (id): void => {
    Notiflix.Loading.dots('Loading...')
    this.card.getTodayCreditCardLogs(id).subscribe(
      data => {
        Notiflix.Loading.remove()
        this.fuelCards = data;
      }
    )
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.getFuelMpesa(this.id);
  }
  onTableSizeChange = (event: any): void => {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getFuelMpesa(this.id);
  }

}


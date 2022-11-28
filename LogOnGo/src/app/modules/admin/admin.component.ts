import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FuelService } from '../fuel/services/fuel/fuel.service';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  hideNav: boolean = false;
  allFuels: any;
  logS: any;
  cardS: any;
  mpesaS: any;
  admins: any;
  selected: any;
  @Input() showAdmin: boolean; 
  @Input() toggleAdmin: () => void;

  constructor(
    private fuel:FuelService,
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.hideNav = true;
    this.allAdmins();
    this.getFuels();
    this.logSummary();
  }
  allAdmins(){
    this.service.getAllAdmins().subscribe({
      next: (res) => {
        this.admins = res;
      }
    })
  }
  getFuels(){
    this.fuel.getFuels().subscribe({
      next: (res) => {
        this.allFuels = res;
      }
    })
  }
  logSummary(){
    this.service.getLogSummary().subscribe({
      next: (res) => {
        this.logS = res;
      }
    })
  }
  copy = (text: any): void => {
    localStorage.setItem('mySavedId',text);
    this.selected = localStorage.getItem('mySavedId')
  }
  reload = (): void => {
    setTimeout(() => {
      location.reload();
    }, 250)
  }
  



}

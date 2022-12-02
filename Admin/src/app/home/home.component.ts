import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user/user';
import { AuthService } from '../modules/auth/services/auth/auth.service';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  allFuels: any;
  logS: any;
  cardS: any;
  mpesaS: any;
  admins: any;
  selected: any;
  currentUser!: User;
  authenticated: boolean = false;
  isStaff: boolean = false;
  isSuper: boolean = false;

  constructor(
    private service:AdminService,
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.allAdmins();
    this.getFuels();
    this.logSummary();
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
      this.authenticated = true;
      this.isStaff = this.auth.currentUserValue.is_staff;
      this.isSuper = this.auth.currentUserValue.is_superuser;
    }else{
      !this.currentUser;
      this.authenticated = false;
      !this.isStaff;
      !this.isSuper;
      this.router.navigate(['/auth']);
    }
  }
  allAdmins(){
    this.service.getAllAdmins().subscribe({
      next: (res) => {
        this.admins = res;
      }
    })
  }
  getFuels(){
    this.service.getAllFuels().subscribe({
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

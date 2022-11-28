import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user/user.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  contacts: any;
  showEdit: boolean = false;
  showContacts: boolean = false;
  hideContent: boolean = false;
  admins: any;
  selected: any;

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.allContacts();
    this.allAdmins();
  }
  allAdmins(){
    this.service.getAllAdmins().subscribe({
      next: (res) => {
        this.admins = res;
      }
    })
  }
  allContacts(){
    this.service.getAllContacts().subscribe({
      next: (res) => {
        this.contacts = res;
      }
    })
  }
  openContact = (): void => {
    this.showContacts = true;
    this.hideContent = true;
  }
  close(){
    this.hideContent = false;
    this.showEdit = false;
  }
  reload = (): void => {
    setTimeout(() => {
      location.reload();
    }, 250)
  }
  reset = (): void => {
    const form = (<HTMLFormElement>document.getElementById('announceForm'))
    setTimeout(() => {
      form.reset();
    }, 500)
  }
  copy(text){
    localStorage.setItem('mySavedId',text);
    this.selected = localStorage.getItem('mySavedId')
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }
  

}


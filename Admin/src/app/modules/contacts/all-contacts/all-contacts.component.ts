import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Contact } from 'src/app/classes/contact/contact';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit, OnDestroy {
  contacts: Contact = new Contact;
  showEdit: boolean = false;
  showContacts: boolean = false;
  hideContent: boolean = false;
  admins: User = new User;
  selected: any;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.allContacts();
    this.allAdmins();
  }
  allAdmins(){
    this.service.getAllAdmins().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        this.admins = res;
      }
    })
  }
  allContacts(){
    this.service.getAllContacts().pipe(takeUntil(this.unsubscribe$)).subscribe({
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
  copy(text: any){
    localStorage.setItem('mySavedId',text);
    this.selected = localStorage.getItem('mySavedId')
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


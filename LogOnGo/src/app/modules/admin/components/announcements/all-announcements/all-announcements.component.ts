import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user/user.service';

@Component({
  selector: 'app-all-announcements',
  templateUrl: './all-announcements.component.html',
  styleUrls: ['./all-announcements.component.css']
})
export class AllAnnouncementsComponent implements OnInit {
  @Input() reload: () => void;
  myModel = 'Announcement';
  @Input() myList: any;
  @Input() id: any;
  @Input() admins: any;
  @Input() copy: (text: number) => void;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;

  constructor(
    private user:UserService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
  }
  
  allRecords(){
    this.user.getAllAnnouncements().subscribe({
      next: (res) => {
        this.myList = res;
      }
    })
  }
  openForm = (): void => {
    this.showData = true;
    this.hideContent = true;
    this.showEdit = false;
  }
  redirect = (): void => {
    setTimeout(() => {
      this.openForm();
    }, 250)
  }
  reset = (): void => {
    const form = (<HTMLFormElement>document.getElementById('announceForm'));
    setTimeout(() => {
      form.reset();
    }, 250)
  }
  close(){
    this.showData = false;
    this.hideContent = false;
    this.showEdit = false;
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }
  
  

}

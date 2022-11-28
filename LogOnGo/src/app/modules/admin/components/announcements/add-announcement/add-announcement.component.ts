import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { UserService } from 'src/app/modules/user/services/user/user.service';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {
  @Input() admins: any;
  @Input() reset: () => void;
  @Input() reload: () => void;

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
  }
  addAnnouncement(data){
    this.service.addAnnouncement(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('add success');
      }
    })
  }
}

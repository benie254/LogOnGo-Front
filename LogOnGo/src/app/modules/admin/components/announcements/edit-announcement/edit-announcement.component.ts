import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {
  @Input() id: any;
  @Input() admins: any;
  @Input() reload: () => void;
  @Input() openForm: () => void;
  @Input() redirect: () => void;
  details: any;
  delConfirmed: boolean = false;

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.announcementDetails();
  }
  editAnnouncement(data){
    this.service.editAnnouncement(this.id,data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('update successful!');
      }
    })
  }
  announcementDetails(){
    this.service.getAnnouncementDetails(this.id).subscribe({
      next: (res) => {
        this.details = res;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteAnnouncement(this.id).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The announcement was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this log? This action cannot be undone",
      "I'm sure",
      "Take me back",
      () => {
        this.delConfirmed = true;
        this.delete();
        location.reload();
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have cancelled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }

  
  
}

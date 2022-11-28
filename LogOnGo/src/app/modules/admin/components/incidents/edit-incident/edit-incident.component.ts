import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-edit-incident',
  templateUrl: './edit-incident.component.html',
  styleUrls: ['./edit-incident.component.css']
})
export class EditIncidentComponent implements OnInit {
  @Input() reset: () => void; 
  @Input() reload: () => void; 
  @Input() id: any; 
  @Input() admins: any;
  delConfirmed: boolean = false;
  details: any;

  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
    this.itemDetails();
  }
  itemDetails(){
    this.service.getIncidentDetails(this.id).subscribe({
      next: (res) => {
        this.details = res;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteIncident(this.id).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The incident report was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this incident report? This action cannot be undone",
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


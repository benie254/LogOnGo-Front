import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-edit-fuel-received',
  templateUrl: './edit-fuel-received.component.html',
  styleUrls: ['./edit-fuel-received.component.css']
})
export class EditFuelReceivedComponent implements OnInit {
  @Input() id: any;
  @Input() fuels: any;
  @Input() admins: any;
  @Input() reload: () => void;
  @Input() openForm: () => void;
  @Input() redirect: () => void;
  details: any;
  delConfirmed: boolean = false;
  selected: any;

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.itemDetails();
  }
  editItem(data){
    this.service.editFuelReceived(this.id,data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('update successful!');
      }
    })
  }
  itemDetails(){
    this.service.getFuelReceivedDetails(this.id).subscribe({
      next: (res) => {
        this.details = res;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteFuelReceived(this.id).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The fuel received was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this fuel received? This action cannot be undone",
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


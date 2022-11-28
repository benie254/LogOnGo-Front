import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/modules/fuel/services/fuel/fuel.service';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-edit-fuel',
  templateUrl: './edit-fuel.component.html',
  styleUrls: ['./edit-fuel.component.css']
})
export class EditFuelComponent implements OnInit {
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
    private fuel:FuelService,
  ) { }

  ngOnInit(): void {
    this.itemDetails();
  }
  editItem(data){
    this.fuel.updateFuelInfo(this.id,data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('update successful!');
      }
    })
  }
  itemDetails(){
    this.fuel.getFuelInfo(this.id).subscribe({
      next: (res) => {
        this.details = res;
        this.selected = this.details;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteFuel(this.id).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The fuel was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this fuel? This action cannot be undone",
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


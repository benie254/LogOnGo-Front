import { Injectable } from '@angular/core';
import { NotifierOptions, NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr'; 



@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly notifier : NotifierService
  constructor(notifierService:NotifierService) {
    this.notifier = notifierService
   }
  submitSuccess(type,message){
    this.notifier.notify(type,message)
  }
  // showSuccess(message, title){
  //   this.toastr.success(message, title)
  // }

}

import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

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
}

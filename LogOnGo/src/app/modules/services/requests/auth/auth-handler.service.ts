import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/modules/errors/services/message/message.service';

@Injectable({
  providedIn: 'any'
})
export class AuthHandlerService {
  public authErrors(error: HttpErrorResponse){
    if(error.error.detail){
      this.messageS.add(error.error.detail);
    }
    if(error.error.email){
      this.messageS.add(error.error.email);
    }
    if(error.error.username){
      this.messageS.add(error.error.username);
    }
    if(error.error.password){
      this.messageS.add(error.error.password);
    }
    if(error.error.old_password){
      this.messageS.add(error.error.old_password);
    }
    if(error.error.password2){
      this.messageS.add(error.error.password2);
    }
    if(error.error.first_name){
      this.messageS.add(error.error.first_name);
    }
    if(error.error.last_name){
      this.messageS.add(error.error.last_name);
    }
    if(error.error.employee_id){
      this.messageS.add(error.error.employee_id);
    }
    if(error.error.petrol_station){
      this.messageS.add(error.error.petrol_station);
    }
  }
  
  constructor(
    private messageS: MessageService,
    ) { }
}


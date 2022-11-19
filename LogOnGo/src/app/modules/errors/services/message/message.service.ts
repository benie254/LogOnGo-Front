import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class MessageService {
  messages: string[] = [];

  add(message: string){
    this.messages.push(message)
  }
  clear(){
    this.messages = [];
  }
}

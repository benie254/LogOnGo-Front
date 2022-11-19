import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCardComponent } from './add-card/add-card.component';
import { AddFuelReceivedComponent } from './add-fuel-received/add-fuel-received.component';
import { AddLogComponent } from './add-log/add-log.component';
import { AddMpesaComponent } from './add-mpesa/add-mpesa.component';




@NgModule({
  declarations: [
    AddCardComponent,
    AddFuelReceivedComponent,
    AddLogComponent,
    AddMpesaComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AllFormsModule { }

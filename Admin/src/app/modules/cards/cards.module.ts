import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { AddCreditCardLogComponent } from './add-credit-card-log/add-credit-card-log.component';
import { AllCreditCardLogsComponent } from './all-credit-card-logs/all-credit-card-logs.component';
import { EditCreditCardLogComponent } from './edit-credit-card-log/edit-credit-card-log.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddCreditCardLogComponent,
    AllCreditCardLogsComponent,
    EditCreditCardLogComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
   AllCreditCardLogsComponent, 
  ]
})
export class CardsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpesaRoutingModule } from './mpesa-routing.module';
import { AddMpesaLogComponent } from './add-mpesa-log/add-mpesa-log.component';
import { AllMpesaLogsComponent } from './all-mpesa-logs/all-mpesa-logs.component';
import { EditMpesaLogComponent } from './edit-mpesa-log/edit-mpesa-log.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddMpesaLogComponent,
    AllMpesaLogsComponent,
    EditMpesaLogComponent
  ],
  imports: [
    CommonModule,
    MpesaRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    AllMpesaLogsComponent,
  ]
})
export class MpesaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpesaRoutingModule } from './mpesa-routing.module';
import { MpesaComponent } from './mpesa.component';
import { AddMpesaLogpageComponent } from './components/add-mpesa-logpage/add-mpesa-logpage.component';
import { EmailMpesaComponent } from './components/email-mpesa/email-mpesa.component';
import { MpesaDetailsComponent } from './components/mpesa-details/mpesa-details.component';
import { PrintMpesaComponent } from './components/print-mpesa/print-mpesa.component';
import { SearchComponent } from './components/search/search.component';
import { FuelMpesaLogsComponent } from './components/fuel-mpesa-logs/fuel-mpesa-logs.component';
import { NoMpesaComponent } from './components/no-mpesa/no-mpesa.component';
import { MpesaInstructionsComponent } from './components/mpesa-instructions/mpesa-instructions.component';
import { ProfileMpesaComponent } from './components/profile-mpesa/profile-mpesa.component';
import { DeleteMpesaComponent } from './components/delete-mpesa/delete-mpesa.component';
import { MpesaLogCardComponent } from './components/mpesa-log-card/mpesa-log-card.component';
import { AllMpesaLogsComponent } from './components/all-mpesa-logs/all-mpesa-logs.component';
import { LogModule } from '../log/log.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddMpesaComponent } from './forms/add-mpesa/add-mpesa.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    MpesaComponent,
    AddMpesaLogpageComponent,
    EmailMpesaComponent,
    MpesaDetailsComponent,
    PrintMpesaComponent,
    SearchComponent,
    FuelMpesaLogsComponent,
    NoMpesaComponent,
    MpesaInstructionsComponent,
    ProfileMpesaComponent,
    DeleteMpesaComponent,
    MpesaLogCardComponent,
    AllMpesaLogsComponent,
    AddMpesaComponent
  ],
  imports: [
    CommonModule,
    MpesaRoutingModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
  ],
  exports: [
    AllMpesaLogsComponent,
  ]
})
export class MpesaModule { }

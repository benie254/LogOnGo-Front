import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log.component';
import { AddLogPageComponent } from './components/add-log-page/add-log-page.component';
import { SearchComponent } from './components/search/search.component';
import { AddLogComponent } from './forms/add-log/add-log.component';
import { AllLogsComponent } from './components/all-logs/all-logs.component';
import { FuelLogsComponent } from './components/fuel-logs/fuel-logs.component';
import { EmailReportComponent } from './components/email-report/email-report.component';
import { LogDetailsComponent } from './components/log-details/log-details.component';
import { PrintLogsComponent } from './components/print-logs/print-logs.component';
import { AllLogsCardComponent } from './components/all-logs-card/all-logs-card.component';
import { LogsCardComponent } from './components/logs-card/logs-card.component';
import { LoggingInstructionsComponent } from './components/logging-instructions/logging-instructions.component';
import { NoLogsComponent } from './components/no-logs/no-logs.component';
import { ProfileLogCardComponent } from './components/profile-log-card/profile-log-card.component';
import { DeleteLogComponent } from './components/delete-log/delete-log.component';
import { FuelReceivedComponent } from '../fuel/components/fuel-received/fuel-received.component';
import { FuelModule } from '../fuel/fuel.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';
import { MpesaModule } from '../mpesa/mpesa.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    LogComponent,
    AddLogPageComponent,
    AllLogsComponent,
    FuelLogsComponent,
    EmailReportComponent,
    LogDetailsComponent,
    PrintLogsComponent,
    SearchComponent,
    AllLogsCardComponent,
    LogsCardComponent,
    LoggingInstructionsComponent,
    NoLogsComponent,
    ProfileLogCardComponent,
    DeleteLogComponent,
    AddLogComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    FuelModule,
    CardModule,
    MpesaModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    LogDetailsComponent,
  ]
})
export class LogModule { }

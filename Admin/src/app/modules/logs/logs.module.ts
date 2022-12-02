import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { AddLogComponent } from './add-log/add-log.component';
import { AllLogsComponent } from './all-logs/all-logs.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddLogComponent,
    AllLogsComponent,
    EditLogComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    AllLogsComponent,
  ]
})
export class LogsModule { }

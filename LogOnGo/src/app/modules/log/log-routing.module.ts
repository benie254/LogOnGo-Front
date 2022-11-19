import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLogPageComponent } from './components/add-log-page/add-log-page.component';
import { AllLogsComponent } from './components/all-logs/all-logs.component';
import { DeleteLogComponent } from './components/delete-log/delete-log.component';
import { EmailReportComponent } from './components/email-report/email-report.component';
import { FuelLogsComponent } from './components/fuel-logs/fuel-logs.component';
import { LogDetailsComponent } from './components/log-details/log-details.component';
import { PrintLogsComponent } from './components/print-logs/print-logs.component';
import { LogComponent } from './log.component';

const routes: Routes = [
  { path: '', component: LogComponent },
  { path: 'add', component: AddLogPageComponent },
  { path: 'all', component: AllLogsComponent },
  { path: 'delete/:id', component: DeleteLogComponent },
  { path: 'email/:id', component: EmailReportComponent },
  { path: 'fuel/:id', component: FuelLogsComponent },
  { path: 'details/:id', component: LogDetailsComponent },
  { path: 'print/:id', component: PrintLogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }

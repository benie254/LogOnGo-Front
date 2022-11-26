import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLogPageComponent } from './components/add-log-page/add-log-page.component';
import { AllLogsComponent } from './components/all-logs/all-logs.component';
import { DeleteLogComponent } from './components/delete-log/delete-log.component';
import { EmailReportComponent } from './components/email-report/email-report.component';
import { FuelLogsComponent } from './components/fuel-logs/fuel-logs.component';
import { LogDetailsComponent } from './components/log-details/log-details.component';

const routes: Routes = [
  { path: 'add/:id/:id', component: AddLogPageComponent },
  { path: 'all', component: AllLogsComponent },
  { path: 'delete/request/:id', component: DeleteLogComponent },
  { path: 'email/report/:id', component: EmailReportComponent },
  { path: 'today/fuel/:id', component: FuelLogsComponent },
  { path: 'details/:id', component: LogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }

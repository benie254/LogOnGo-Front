import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLogsComponent } from './all-logs/all-logs.component';

const routes: Routes = [{ path: '', component: AllLogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }

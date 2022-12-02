import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCreditCardLogsComponent } from './all-credit-card-logs/all-credit-card-logs.component';

const routes: Routes = [{ path: '', component: AllCreditCardLogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }

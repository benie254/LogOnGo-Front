import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardLogsComponent } from './components/all-card-logs/all-card-logs.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { FuelCardLogsComponent } from './components/fuel-card-logs/fuel-card-logs.component';
import { AddCardComponent } from './forms/add-card/add-card.component';

const routes: Routes = [
  { path: 'add', component: AddCardComponent },
  { path: 'all', component: AllCardLogsComponent },
  { path: 'details/:id', component: CardDetailsComponent },
  { path: 'delete/request/:id', component: DeleteCardComponent },
  { path: 'email/report/:id', component: EmailCardComponent },
  { path: 'fuel/:id', component: FuelCardLogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }

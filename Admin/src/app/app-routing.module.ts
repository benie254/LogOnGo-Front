import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'announcements', loadChildren: () => import('./modules/announcements/announcements.module').then(m => m.AnnouncementsModule) }, 
  { path: 'cards', loadChildren: () => import('./modules/cards/cards.module').then(m => m.CardsModule) }, 
  { path: 'logs', loadChildren: () => import('./modules/logs/logs.module').then(m => m.LogsModule) }, 
  { path: 'mpesa', loadChildren: () => import('./modules/mpesa/mpesa.module').then(m => m.MpesaModule) }, 
  { path: 'fuels', loadChildren: () => import('./modules/fuels/fuels.module').then(m => m.FuelsModule) }, 
  { path: 'contacts', loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule) }, 
  { path: 'received', loadChildren: () => import('./modules/fuels-received/fuels-received.module').then(m => m.FuelsReceivedModule) }, 
  { path: 'incidents', loadChildren: () => import('./modules/incidents/incidents.module').then(m => m.IncidentsModule) }, 
  { path: 'summary', loadChildren: () => import('./modules/summary/summary.module').then(m => m.SummaryModule) }, 
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

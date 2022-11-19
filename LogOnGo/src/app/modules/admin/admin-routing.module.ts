import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/components/login/login.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'dashboard', pathMatch: 'full', 
  },
  // {
  //   path: 'login', component: LoginComponent,
  // },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'user-profile', component: UserProfileComponent,
  },
  {
    path: 'table-list', component: TableListComponent,
  },
  {
    path: 'typography', component: TypographyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

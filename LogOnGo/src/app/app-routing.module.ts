import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'errors', loadChildren: () => import('./modules/errors/errors.module').then(m => m.ErrorsModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'root', loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule) },
  { path: '', loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule) },
  { path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) },
  { path: 'cards', loadChildren: () => import('./modules/card/card.module').then(m => m.CardModule) },
  { path: 'logs', loadChildren: () => import('./modules/log/log.module').then(m => m.LogModule) },
  { path: 'mpesa', loadChildren: () => import('./modules/mpesa/mpesa.module').then(m => m.MpesaModule) },
  { path: 'fuel', loadChildren: () => import('./modules/fuel/fuel.module').then(m => m.FuelModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

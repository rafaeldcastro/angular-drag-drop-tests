import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/**GUARDS */
import { AuthCanLoadGuard } from './pages/auth/shared/services/guards/can-load/auth.can-load.guard';
import { AutologinCanLoadGuard } from './pages/auth/shared/services/guards/can-load/auto-login.can-load.guard';

/**MODELS */
import { appRoutesNames } from './app-routes-names';

const routes: Routes = [
  {
    path: appRoutesNames.MAIN.route,
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPagesModule)
  },
  {
    path: appRoutesNames.LOGIN.route,
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: appRoutesNames.MAIN.route,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
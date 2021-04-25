import { Routes, RouterModule } from '@angular/router';
import { mainRoutesNames } from './main-routes-names';

import { MainPagesComponent } from './main.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
    children: [
      {
        path: '',
        redirectTo: mainRoutesNames.HOME.route,
        pathMatch: 'full'
      },
      {
        path: mainRoutesNames.HOME.route,
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      }
    ]
  }
];

export const MAIN_PAGES_ROUTES = RouterModule.forChild(mainRoutes);
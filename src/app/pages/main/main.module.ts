/**MODULS */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MAIN_PAGES_ROUTES } from './main-routes';

/**COMPONENTS */
import { MainPagesComponent } from './main.component';

@NgModule({
  declarations: [
    MainPagesComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MAIN_PAGES_ROUTES,
  ],
  exports: [
    MainPagesComponent,
  ]
})
export class MainPagesModule { }

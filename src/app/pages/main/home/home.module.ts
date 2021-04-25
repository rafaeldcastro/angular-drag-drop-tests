/**MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/**COMPONENTS */
import { HomePage } from './home.page';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SharedModule
  ]
})
export class HomePageModule {}

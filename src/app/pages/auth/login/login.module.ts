import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { LoginPage } from './login.page';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ]),
    SharedModule
  ]
})
export class LoginPageModule {}

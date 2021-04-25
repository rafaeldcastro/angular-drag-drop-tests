import { Router } from '@angular/router';
import { Component } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';
import { mainRoutesNames } from '@pages/main/main-routes-names';
import { User } from '@core/models/user/user.model';

/**SERVICES */

@Component({
  selector: 'app-main-pages',
  template:
  `
  <router-outlet id="main" main class="main-wrapper"></router-outlet>
  `
})
export class MainPagesComponent {

  constructor(private router: Router) {

  }

}

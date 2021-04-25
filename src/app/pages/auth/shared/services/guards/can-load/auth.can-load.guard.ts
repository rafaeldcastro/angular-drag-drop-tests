import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';

/**MODELS */
import { appRoutesNames } from '@app/app-routes-names';

/**SERVICES */
import { AuthService } from '../../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthCanLoadGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(): Observable<boolean> {

    return this.authService.isAuthenticated$
      .pipe(
        filter(val => val !== null),
        take(1),
        map(isAuth => {

          if(isAuth) return true;

          this.router.navigateByUrl(`/${appRoutesNames.LOGIN.route}`, { replaceUrl: true });
          return false;
        })
      )
  }
}

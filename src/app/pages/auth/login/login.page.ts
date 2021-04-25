import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/**MODELS */
import { APP_CONSTANTS } from '@constants/app.constants';
import { appRoutesNames } from '@app/app-routes-names';
import { AuthBaseView } from '../shared/models/auth-base-view';

/**SERVICES */
import { AuthService } from '../shared/services/auth/auth.service';
import { CustomValidators } from '@core/models/validators/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage extends AuthBaseView {

  appRoutesNames = appRoutesNames;
  showHidePass = true;
  activeView: string = '';

  constructor(
    protected router: Router,
    protected authService: AuthService
  ) {
    super(router, authService);

    this.form.addControl('email', new FormControl('', [Validators.required, Validators.minLength(5), CustomValidators.isValidEmail]));
    this.form.addControl('senha', new FormControl('', [Validators.required, Validators.minLength(4)]));
  }

  ngOnInit() {
    
  }

  async onSubmit() {
    super.canSubmit();

    //login eve.holt@reqres.in | infra@midiaseducativas.com.br
    //senha cityslicka | adm1908
    //token QpwL5tke4Pnpja7X4
    let user = {
      email: this.formcontrol.email.value,
      password: this.formcontrol.senha.value
    }

    this.loginUser(user);
  }

}

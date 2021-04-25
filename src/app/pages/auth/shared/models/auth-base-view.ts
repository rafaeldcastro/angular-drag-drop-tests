import { Router } from '@angular/router';

/**MODELS */
declare var Swal: any;
import { appRoutesNames } from '@app/app-routes-names';
import { FormsBase } from '@core/models/forms/forms.model';

/**SERVICES */
import { AuthService } from '../services/auth/auth.service';
import { Loading } from '@shared/components/loading/services/loading.service';

export class AuthBaseView extends FormsBase {

    appRoutes = appRoutesNames;

    constructor(
        protected router: Router,
        protected authService: AuthService) {

        super();
    }

    protected loginUser(user) {
        Loading.present();

        this.authService.login(user)
            .subscribe(
                () => {
                    Loading.dismiss();
                    this.router.navigateByUrl(`/${appRoutesNames.MAIN.route}`, { replaceUrl: true });
                },
                err => {
                    console.log(err);
                    Swal.fire({
                        title: err.error.message,
                        text: err.error.error,
                        icon: 'error',
                        confirmButtonText: 'Fechar'
                    });
                    Loading.dismiss();
                }
            );
    }
}

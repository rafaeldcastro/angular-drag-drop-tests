import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

/**MODELS */
import { APP_CONSTANTS } from '@constants/app.constants';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '@env';
import { User } from '@core/models/user/user.model';

/**SERVICES */
import { StorageService } from '@core/services/storage/storage.service';
import { UserService } from '@core/services/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthenticatedValue$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _userToken: string = '';

    constructor(
        private http: HttpClient,
        private router: Router,
        private userService: UserService,
        private storage: StorageService
    ) {
        this.loadToken();
    }

    private async loadToken() {

        const token = await this.storage.get(APP_CONSTANTS.USER_TOKEN);

        if (token && token != '') {
            this._userToken = token;
            this.isAuthenticatedValue$.next(true);

        } else {
            this.isAuthenticatedValue$.next(false);
            this._userToken = '';
        }
    }

    get token(){
        return this._userToken;
    }

    get isAuthenticated$() {
        return this.isAuthenticatedValue$.asObservable();
    }

    login(user): Observable<any> {
        let data = {
            login: user.email,
            senha: user.password
        }
        const url = `${environment.URL_API}/login`;
        // let data = { email: user.email, password: user.password}
        // const url = 'https://reqres.in/api/login';

        return this.http.post(url, data)
            .pipe(
                map((data: any) => data),
                switchMap(data => {
                    this.userService.setUser( new User(data.usuario) );
                    /** palavra-chave from é o toPromise() reverso. Pega uma promise 
                     * e transforma num Observable*/
                     this._userToken = data.token;
                     return from(this.storage.set(APP_CONSTANTS.USER_TOKEN, data.token));
                }),
                tap(() => {
                    this.isAuthenticatedValue$.next(true);
                })
            )
    }

    logout(clearAll?: string): Promise<void> {

        if (clearAll) return this.logoutClear();

        return this.storage.remove(APP_CONSTANTS.USER_TOKEN)
            .then(() => {
                this.storage.remove(APP_CONSTANTS.USER);
                this.isAuthenticatedValue$.next(false);
                this.router.navigateByUrl(`/`, { replaceUrl: true });
            });
    }

    /**CUIDADO! Além de deslogar da aplicação, remove todas os 
     * dados armazenados no storage do app */
    logoutClear(): Promise<void> {
        return this.storage.removeAll()
            .then(() => {
                this.isAuthenticatedValue$.next(false);
                this.router.navigateByUrl(`/`, { replaceUrl: true });
            });
    }

    recoverPassword(email: string) {

        const url = `${environment.URL_API}/usuarios/recuperar-senha`;
        let data = {
            email: email
        };

        return this.http.post<any>(url, data);
    }

    changeUserPassword(new_password) {

        const url = `${environment.URL_API}/usuarios/trocar-senha`;

        return this.http.put<any>(url, new_password);
    }

    signUp(user): Observable<any> {
        let data = user;
        data.senha = user.password;
        let body = JSON.stringify(data);
        const url = `${environment.URL_API}/usuarios`;

        return this.http.post(url, user);
    }
}
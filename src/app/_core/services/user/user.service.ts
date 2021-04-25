import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**MODELS */
import { map } from 'rxjs/operators';
import { environment } from '@env';
import { APP_CONSTANTS } from '@constants/app.constants';
import { User } from '@core/models/user/user.model';

/**SERVICES */
import { StorageService } from '@core/services/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _user: User;

    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private router: Router
    ) { 
        this.loadUser();
    }

    async loadUser(){
        this._user = await this.storage.get(APP_CONSTANTS.USER);       
    }

    getUser(): User{
        return this._user;
    }

    setUser(user: User){
        this._user = user;
        this.storage.set(APP_CONSTANTS.USER, this._user);
    }

    getUserById(id){
        const url = `${environment.URL_API}/usuarios/${id}`;

        return this.http.get(url);
    }

    getChildren(id){
        const url = `${environment.URL_API}/usuarios/${id}/filiacoes`;

        return this.http.get(url).pipe(
            map(data => data['filiacoes'])
        )
    }

    getUserByCPF(cpf){
        const url = `${environment.URL_API}/usuarios/filhos/${cpf}`;

        return this.http.get(url);
    }

    isRegisteredByCPF(cpf){
        const url = `${environment.URL_API}/usuarios/filhos/${cpf}`;

        return this.http.get(url).pipe(
            map(data => data['cadastrado'])
        );
    }

    updateChild(child: User){
        
        if(child.id){
            return this.updateUser(child);
        }

        const body = JSON.stringify( child );
        const url = `${environment.URL_API}/usuarios/filhos`;

        return this.http.post(url, body).pipe(
            map(data => data)
        );
    }

    updateUser(user: User){

        const url = `${environment.URL_API}/usuarios/${user.id}`;
        const body = JSON.stringify( user );
        
        return this.http.put(url, body, {
            // headers: { 'Content-Type': 'application/json' }
        }).pipe(
            map(data => data)
        );
    }
}
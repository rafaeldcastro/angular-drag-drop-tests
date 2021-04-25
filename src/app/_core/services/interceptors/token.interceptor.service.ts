import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/**SERVICES */
import { AuthService } from '@pages/auth/shared/services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = this.authService.token;

        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request);
    }

}
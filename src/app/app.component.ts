import { Component } from '@angular/core';

/**MODELS */
import { Subscription } from 'rxjs';

/**SERVICES */
import { EventEmitterService } from '@core/services/emitter/event-emitter.service';
import { LOADING_NOTIFICATIONS } from './shared/components/loading/notifications/loading.notifications';

@Component({
  selector: 'app-root',
  template: `
  <ngx-loading-bar [includeSpinner]="false" [color]=loadingBarColor></ngx-loading-bar>
  <router-outlet></router-outlet>
  <loading *ngIf="isLoading" [isLoading]="isLoading"></loading>
  `
})
export class AppComponent {

  private subscriptions = new Subscription(); 
  loadingBarColor: string = '#d98622';
  isLoading: boolean;

  constructor(){
    this.initLoadingSubscribe();
  }

  private initLoadingSubscribe() {
    this.subscriptions.add( EventEmitterService.get( LOADING_NOTIFICATIONS.IS_LOADING )
      .subscribe(isLoading => this.isLoading = isLoading ) );
  }
}

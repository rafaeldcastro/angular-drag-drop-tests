import { Component } from "@angular/core";

/**MODELS */
import { Subscription } from "rxjs";

/**SERVICES */
import { EventEmitterService } from "./_core/services/emitter/event-emitter.service";
import { LOADING_NOTIFICATIONS } from "./shared/components/loading/notifications/loading.notifications";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <loading *ngIf="isLoading" [isLoading]="isLoading"></loading>
  `
})
export class AppComponent {
  private subscriptions = new Subscription();
  isLoading: boolean;

  constructor() {
    this.initLoadingSubscribe();
  }

  private initLoadingSubscribe() {
    this.subscriptions.add(
      EventEmitterService.get(LOADING_NOTIFICATIONS.IS_LOADING).subscribe(
        isLoading => (this.isLoading = isLoading)
      )
    );
  }
}

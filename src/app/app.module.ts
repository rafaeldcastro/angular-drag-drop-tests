
/**MODULES */
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';

import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

/**COMPONENTS */
import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

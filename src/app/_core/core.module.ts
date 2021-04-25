import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONSTANTS } from '@constants/app.constants';

/**MODULES */
import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IonicStorageModule.forRoot({
            name: `__${APP_CONSTANTS.APP_PREFIX}`,
            driverOrder: [Drivers.IndexedDB]
        }),
        LoadingBarModule,
        LoadingBarRouterModule,
        LoadingBarHttpClientModule
    ],
    exports: [
        HttpClientModule,
        BrowserAnimationsModule,
        IonicStorageModule,
        LoadingBarModule,
        LoadingBarRouterModule,
        LoadingBarHttpClientModule
    ]

})
export class CoreModule { }

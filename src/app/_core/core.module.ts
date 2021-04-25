import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { APP_CONSTANTS } from "./constants/app.constants";

/**MODULES */
import { Drivers } from "@ionic/storage";
import { IonicStorageModule } from "@ionic/storage-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot({
      name: `__${APP_CONSTANTS.APP_PREFIX}`,
      driverOrder: [Drivers.IndexedDB]
    })
  ],
  exports: [HttpClientModule, BrowserAnimationsModule, IonicStorageModule]
})
export class CoreModule {}

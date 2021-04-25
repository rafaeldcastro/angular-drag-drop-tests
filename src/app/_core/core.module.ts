import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { APP_CONSTANTS } from "./constants/app.constants";

/**MODULES */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [HttpClientModule, BrowserAnimationsModule]
})
export class CoreModule {}

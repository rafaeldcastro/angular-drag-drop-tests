import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

/**MODULES */
import { WidgetsModule } from "./widgets/widgets.module";
import { MaterialComponentsModule } from "./material-modules/mat-components.module";

/**COMPONENTS */
import * as indexComponents from "./index";

@NgModule({
  declarations: [indexComponents.components],
  imports: [CommonModule, MaterialComponentsModule, WidgetsModule],
  exports: [indexComponents.components, MaterialComponentsModule, WidgetsModule]
})
export class ComponentsModule {}

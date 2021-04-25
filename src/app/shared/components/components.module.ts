import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**MODULES */
import { WidgetsModule } from './widgets/widgets.module';
import { MaterialComponentsModule } from './material-modules/mat-components.module';
import { ModalsComponentsModule } from './modals/modals-components.module';

/**COMPONENTS */
import * as indexComponents from './index';

@NgModule({
    declarations: [
        indexComponents.components
    ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        WidgetsModule,
        ModalsComponentsModule
    ],
    exports: [
        indexComponents.components,
        MaterialComponentsModule,
        ModalsComponentsModule,
        WidgetsModule
    ]

})
export class ComponentsModule { }

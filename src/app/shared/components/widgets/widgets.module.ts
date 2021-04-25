import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**MODULES */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';
import { MaterialComponentsModule } from './../material-modules/mat-components.module';

/**COMPONENTS */
import { BoardComponent } from './components/board/board.component';
import * as widgets from './components/widget-container/index';

@NgModule({
    declarations: [
        BoardComponent,
        widgets.components
    ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        ContenteditableValueAccessorModule
    ],
    exports: [
        BoardComponent,
        widgets.components
    ]

})
export class WidgetsModule { }

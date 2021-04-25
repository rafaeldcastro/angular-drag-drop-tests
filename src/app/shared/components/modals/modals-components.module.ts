import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**COMPONENTS */
import { ModalGenericComponent } from './modal-generic/modal-generic.component';

/**MODULES */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';
import * as matSchematics from '../material-modules/index';

@NgModule({
    declarations: [
        ModalGenericComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContenteditableValueAccessorModule,
        matSchematics.modules,
    ],
    exports: [
        ModalGenericComponent
    ]
})
export class ModalsComponentsModule { }

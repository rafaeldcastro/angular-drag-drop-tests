import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';

import * as matSchematics from './index';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    declarations: [
        matSchematics.components
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContenteditableValueAccessorModule,
        matSchematics.modules,
        MatDatepickerModule,
    ],
    exports: [
        matSchematics.components,
        matSchematics.modules,
        MatDatepickerModule
    ],
    providers: [
        MatDatepickerModule
    ]
})
export class MaterialComponentsModule { }

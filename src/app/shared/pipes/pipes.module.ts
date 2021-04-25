import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';

import * as indexPipes from './index';

@NgModule({
    declarations: [
        indexPipes.pipes
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        indexPipes.pipes,
        NgPipesModule
    ]
})
export class PipesModule { }

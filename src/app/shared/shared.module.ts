import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**MODULES */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContenteditableValueAccessorModule,
        DirectivesModule,
        PipesModule,
        ComponentsModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        PipesModule,
        ComponentsModule
    ]

})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '@ui';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';

@NgModule({
    declarations: [
    ],
    exports: [
        ButtonModule,
        MainLayoutModule
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MainLayoutModule,
    ]
})
export class SharedModule { }

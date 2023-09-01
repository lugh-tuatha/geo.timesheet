import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '@ui';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { ModalComponent } from './ui/modal/modal/modal.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

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
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
    ]
})
export class SharedModule { }

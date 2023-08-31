import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '@ui';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { ModalComponent } from './ui/modal/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
    ModalComponent
  ],
    exports: [
        ButtonModule,
        MainLayoutModule
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MainLayoutModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    SnackbarComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SnackbarModule { }

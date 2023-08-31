import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarModule, ButtonModule } from '@ui';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '@ui/button/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog'; 
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    TimesheetComponent,
  ],
  exports: [
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    MainLayoutModule,
    FontAwesomeModule,
    AvatarModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    ButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class TimesheetModule { }
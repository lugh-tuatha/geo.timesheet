import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  exports: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class MainLayoutModule { }

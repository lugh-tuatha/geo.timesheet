import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './public/modules/dashboard/pages/dashboard/dashboard.component';
import { SummaryComponent } from './public/pages/summary/summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './public/pages/login/login.component';
import { HttpClientModule } from '@angular/common/http'

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PrivateComponent } from './private/private.component';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { PrivateModule } from './private/private.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField } from '@angular/material/form-field';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        AppComponent,
        SummaryComponent,
        LoginComponent,
        PrivateComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        SweetAlert2Module.forRoot(),
        HttpClientModule,
        SharedModule,
        PublicModule,
        PrivateModule,
        BrowserAnimationsModule,
        MaterialModule
    ]
})
export class AppModule { }

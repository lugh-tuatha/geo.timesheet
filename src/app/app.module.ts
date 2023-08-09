import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { HttpClientModule } from '@angular/common/http'

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ModalComponent } from './components/modal/modal.component';
import { PrivateComponent } from './private/private.component';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    TimesheetComponent,
    SummaryComponent,
    TableComponent,
    CardComponent,
    TrainingsComponent,
    AvatarComponent,
    LoginComponent,
    LayoutComponent,
    ButtonComponent,
    ChartComponent,
    ModalComponent,
    PrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

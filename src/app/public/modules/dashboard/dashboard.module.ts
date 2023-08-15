import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartComponent } from './components/chart/chart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';

@NgModule({
  declarations: [
    ChartComponent,
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainLayoutModule
  ]
})
export class DashboardModule { }

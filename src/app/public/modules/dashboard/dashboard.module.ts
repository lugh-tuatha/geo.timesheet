import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartComponent } from './components/chart/chart.component';
import { MainLayoutModule } from 'src/app/shared/layout/main-layout/main-layout.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { KpiComponent } from './pages/kpi/kpi.component';
import { NgChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from '@ui';
import { ProjectsModule } from './modules/projects/projects.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TimesheetModule } from './modules/timesheet/timesheet.module';
import { TrainingsModule } from './modules/trainings/trainings.module';

@NgModule({
  declarations: [
    PublicComponent,
    KpiComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    NgChartsModule,
    FontAwesomeModule,
    ButtonModule,
    ProjectsModule,
    DashboardModule,
    TimesheetModule,
    TrainingsModule,
    SweetAlert2Module.forRoot(),
  ]
})
export class PublicModule { }

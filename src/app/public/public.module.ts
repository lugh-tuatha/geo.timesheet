import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { KpiComponent } from './pages/kpi/kpi.component';
import { NgChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonModule } from '@ui';
import { FormsModule } from '@angular/forms';
import { ProjectsModule } from './modules/projects/projects.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TimesheetModule } from './modules/timesheet/timesheet.module';

@NgModule({
  declarations: [
    PublicComponent,
    KpiComponent,
    TrainingsComponent,  
    ModalComponent,
    CardComponent,
  ],
  exports: [
    CardComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    NgChartsModule,
    FontAwesomeModule,
    ButtonModule,
    FormsModule,
    ProjectsModule,
    DashboardModule,
    TimesheetModule
  ]
})
export class PublicModule { }

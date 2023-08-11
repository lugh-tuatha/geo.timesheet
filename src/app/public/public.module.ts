import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { KpiComponent } from './pages/kpi/kpi.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonModule } from '@ui';

@NgModule({
  declarations: [
    PublicComponent,
    KpiComponent,
    ChartComponent,  
    TrainingsComponent,  
    AvatarComponent,
    TableComponent,
    ModalComponent,
    CardComponent
  ],
  exports: [
    TableComponent,
    ChartComponent,
    CardComponent,
    AvatarComponent,
    ModalComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    NgChartsModule,
    FontAwesomeModule,
    ButtonModule
  ]
})
export class PublicModule { }

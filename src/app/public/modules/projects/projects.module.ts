import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { HttpClientModule } from '@angular/common/http'
import { ChartComponent } from '../dashboard/components/chart/chart.component';
import { TotalHoursComponent } from './pages/total-hours/total-hours.component';
import { AvatarModule } from '@ui';

@NgModule({
  declarations: [
    ProjectsComponent,
    TotalHoursComponent
  ],
  exports: [
    ProjectsComponent
  ],
  imports: [
    ProjectsTableComponent,
    CommonModule,
    ProjectsRoutingModule,
    MainLayoutModule,
    HttpClientModule,
    AvatarModule
  ]
})
export class ProjectsModule { }

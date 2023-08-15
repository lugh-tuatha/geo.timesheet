import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { HttpClientModule } from '@angular/common/http'
import { ChartComponent } from '../dashboard/components/chart/chart.component';

@NgModule({
  declarations: [
    ProjectsTableComponent,
    ProjectsComponent
  ],
  exports: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MainLayoutModule,
    HttpClientModule,
  ]
})
export class ProjectsModule { }

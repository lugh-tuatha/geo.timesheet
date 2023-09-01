import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { HttpClientModule } from '@angular/common/http'
import { TotalHoursComponent } from './pages/total-hours/total-hours.component';
import { AvatarModule } from '@ui';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    ProjectsTableComponent,
    ProjectsComponent,
    TotalHoursComponent
  ],
  exports: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MainLayoutModule,
    HttpClientModule,
    AvatarModule,
    MaterialModule
  ]
})
export class ProjectsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { MainLayoutModule } from 'src/app/shared/layout/main-layout/main-layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { TimesheetTableComponent } from './components/timesheet-table/timesheet-table.component';

@NgModule({
  declarations: [
    TimesheetTableComponent,
    TimesheetComponent,
    AvatarComponent
  ],
  exports: [
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    MainLayoutModule,
    FontAwesomeModule,
  ]
})
export class TimesheetModule { }

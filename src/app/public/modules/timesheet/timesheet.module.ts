import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimesheetTableComponent } from './components/timesheet-table/timesheet-table.component';
import { AvatarModule } from '@ui';

@NgModule({
  declarations: [
    TimesheetTableComponent,
    TimesheetComponent,
  ],
  exports: [
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    MainLayoutModule,
    FontAwesomeModule,
    AvatarModule
  ]
})
export class TimesheetModule { }

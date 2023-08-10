import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './public/pages/dashboard/dashboard.component';
import { TimesheetComponent } from './public/pages/timesheet/timesheet.component';
import { SummaryComponent } from './public/pages/summary/summary.component';
import { LoginComponent } from './public/pages/login/login.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

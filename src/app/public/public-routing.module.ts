import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { LoginComponent } from './pages/login/login.component';
import { TimesheetComponent } from './modules/timesheet/pages/timesheet/timesheet.component';
import { TrainingsComponent } from './modules/trainings/pages/trainings/trainings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', component: LoginComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'trainings', component: TrainingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TotalHoursComponent } from './pages/total-hours/total-hours.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/total-hours/geo', component: TotalHoursComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

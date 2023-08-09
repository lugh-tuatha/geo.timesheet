import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphDataComponent } from './pages/graph-data/graph-data.component';

const routes: Routes = [
  { path: 'graph-data', component: GraphDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

import { Component } from '@angular/core';
import * as Fa from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  faTable = Fa.faTable;
  faChartLine = Fa.faChartLine;
}

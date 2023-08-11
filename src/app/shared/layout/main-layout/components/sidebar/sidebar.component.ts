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
  faMagnifyingGlassChart = Fa.faMagnifyingGlassChart;
  faChartSimple= Fa.faChartSimple;
  faList = Fa.faList;
  faProjectDiagram = Fa.faProjectDiagram;
  faUsersBetweenLines = Fa.faUsersBetweenLines;
  faIdBadge = Fa.faIdBadge;
  faCalendarWeek = Fa.faCalendarWeek;
  faBusinessTime = Fa.faBusinessTime;
  faLightbulb = Fa.faLightbulb;
  faHouse = Fa.faHouse;
}

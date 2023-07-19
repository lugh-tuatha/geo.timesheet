import { Component } from '@angular/core';
import { TIMESHEET_TABLE } from 'src/app/model/timesheet-table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  thead = TIMESHEET_TABLE;
}

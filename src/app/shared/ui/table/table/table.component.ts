import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Timesheet } from 'src/app/public/modules/timesheet/models/timesheet';
import { HttpClient } from '@angular/common/http'
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  dataSource: any;
  timesheetList: Timesheet[] = [];
  displayedColumns: string[] = ["edit", "projects", "mon", "tue", "wed", "thu", "fri", "sat", "sun", "delete"]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
  ) {
    this.loadTimesheet()
  }

  loadTimesheet() { // postgre = http://localhost:3000/api/v1/timesheet
    this.http.get<any>('http://localhost:9000/geo/api/v1/timesheet').subscribe((response: any) => {
      this.timesheetList = response.data.timesheet;
      this.dataSource = new MatTableDataSource<Timesheet>(this.timesheetList);
      this.dataSource.paginator = this.paginator
    });
  }

  Filterchange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value
  }
}

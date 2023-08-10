import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TIMESHEET_TABLE } from 'src/app/data/timesheet-table-data';
import { Timesheet } from 'src/app/public/models/timesheet';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  thead = TIMESHEET_TABLE;
  tvalue = TIMESHEET_TABLE.value;

  thClass(forAdmin: boolean) {
    if (forAdmin) {
      return 'for-admin'; 
    }
    return '';
  }

  constructor(private http: HttpClient) {}

  timesheet: Timesheet[] = [];
  ngOnInit(){
    this.http.get<any>('http://localhost:9000/geo/api/v1/timesheet').subscribe((response: any) => {
      this.timesheet = response.data.findTimesheet
      console.log('Received data:', this.timesheet);
    });
  }
}
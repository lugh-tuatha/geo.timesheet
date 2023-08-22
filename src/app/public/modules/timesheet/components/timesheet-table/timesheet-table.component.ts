import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from 'src/app/public/modules/timesheet/models/timesheet';

@Component({
  selector: 'app-timesheet-table',
  templateUrl: './timesheet-table.component.html',
  styleUrls: ['./timesheet-table.component.scss']
})
export class TimesheetTableComponent {
  thClass(forAdmin: boolean) {
    if (forAdmin) {
      return 'for-admin'; 
    }
    return '';
  }

  constructor(private http: HttpClient) {}

  timesheet: Timesheet[] = [];
  ngOnInit(){ // http://localhost:9000/geo/api/v1/timesheet = for mongodb
    this.http.get<any>('http://localhost:3000/api/v1/timesheet').subscribe((response: any) => {
      this.timesheet = response.data.timesheet
      console.log('Received data:', this.timesheet);
    });
  }
}
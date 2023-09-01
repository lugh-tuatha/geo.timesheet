import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from '../../models/timesheet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimesheetServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  saveTimesheetEntry(data: any){
    return this.http.post("http://localhost:9000/geo/api/v1/timesheet", data)
  }

  updateTimesheet(timesheetId: any, data: any): Observable<any> {
    const url = `http://localhost:9000/geo/api/v1/timesheet/${timesheetId}`;
    return this.http.patch(url, data);
  }

  getTimesheetById(_id: any){
    return this.http.get("http://localhost:9000/geo/api/v1/timesheet/"+_id)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timesheet } from '../../models/timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimesheetServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getTimesheet(): Observable<Timesheet[]> { // fake json: https://mocki.io/v1/0dcb7e07-bf3c-481d-9f81-4f23c2d24bd4
    return this.http.get<Timesheet[]>("http://localhost:9000/geo/api/v1/timesheet");
  }

  saveTimesheetEntry(data: any) {
    return this.http.post("http://localhost:9000/geo/api/v1/timesheet", data)
  }

  updateTimesheet(timesheetId: any, data: any): Observable<any> {
    const url = `http://localhost:9000/geo/api/v1/timesheet/${timesheetId}`;
    return this.http.patch(url, data);
  }

  getTimesheetById(_id: any) {
    return this.http.get("http://localhost:9000/geo/api/v1/timesheet/" + _id)
  }

  deleteTimesheetEntry(_id: any) {
    return this.http.delete("http://localhost:9000/geo/api/v1/timesheet/" + _id)
  }
}

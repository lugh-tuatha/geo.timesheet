import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetServiceService {

  constructor(private http: HttpClient) { }

  addRow() {
    const url = 'http://localhost:3000/api/v1/timesheet';
    const payload = {
      projects: null,
      mon: null,
      tue: null,
      wed: null,
      thu: null,
      fri: null,
      sat: null,
      sun: null,
    }

    return this.http.post(url, payload);
  }
}

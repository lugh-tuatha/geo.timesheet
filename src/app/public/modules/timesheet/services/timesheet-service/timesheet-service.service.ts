import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from '../../models/timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimesheetServiceService {

  constructor(private http: HttpClient) { }

  updateTimesheet(id: Number, value: Timesheet){
    this.http.patch(`http://localhost:9000/geo/api/v1/timesheet/${id}`, value)
    .subscribe();
  }
}

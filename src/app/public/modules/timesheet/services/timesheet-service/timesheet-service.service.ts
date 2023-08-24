import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetServiceService {

  constructor(private http: HttpClient) { }

}

import { Component } from '@angular/core';
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TimesheetServiceService } from '../../services/timesheet-service/timesheet-service.service';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from 'src/app/public/modules/timesheet/models/timesheet';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  timesheetData: any = [];
  timesheet: Timesheet[] = [];

  constructor(
    private timesheetServiceService: TimesheetServiceService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/v1/timesheet').subscribe((response: any) => {
      this.timesheet = response.data.timesheet;
      console.log(response.data);
      console.log('Received data:', this.timesheet);
    });
  }// End on InitcreateNewRow
  
  createNewRow() {
    this.timesheetServiceService.addRow().subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

  // Trello-0001
  // SW-INC120912
  // GT-91029120912
  createNewRow1() {
    this.timesheet.push({
      id: 12,
      projects: "",
      mon: "",
      tue: "",
      wed: "",  
      thu: "",
      fri: "",
      sat: "",
      sun: "",
      total: "",
    })
    //call backend to save data
  }
}

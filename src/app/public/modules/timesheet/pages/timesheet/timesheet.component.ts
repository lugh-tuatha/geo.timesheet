import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { faPlus, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TimesheetServiceService } from '../../services/timesheet-service/timesheet-service.service';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from 'src/app/public/modules/timesheet/models/timesheet';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faXmark = faXmark;

  timesheetData: any = [];
  timesheet: Timesheet[] = [];

  /*------------ Toggle Modal ------------*/
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  constructor(
    private timesheetServiceService: TimesheetServiceService,
    private http: HttpClient,
  ) { }

  ngOnInit() { // postgre = http://localhost:3000/api/v1/timesheet
    this.http.get<any>('http://localhost:9000/geo/api/v1/timesheet').subscribe((response: any) => {
      this.timesheet = response.data.timesheet;
      console.log('Received data:', this.timesheet);
    });
  }// End on InitcreateNewRow
  
  // Trello-0001
  // SW-INC120912
  // GT-91029120912
  createNewRow() {
    this.timesheet.push({
      _id: 12,
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

  /*------------------------ Delete row ------------------------*/
  @ViewChild('deleteSwal') deleteSwal: any;

  deleteRowIndex: number = -1;

  showDeleteConfirmation(index: number) {
    this.deleteRowIndex = index;
    this.deleteSwal.fire();
  }

  deleteRow() {
    if (this.deleteRowIndex >= 0 && this.deleteRowIndex < this.timesheet.length) {
      this.timesheet.splice(this.deleteRowIndex, 1);
      this.deleteRowIndex = -1; // Reset stored index
    }
  }

  /*------------------------ Edit row ------------------------*/
  onEditClicked(_id: Number){
    let currentTimesheet = this.timesheet.find((t) => {return t._id === _id})
    console.log(currentTimesheet)
    // this.form.setValue({
    //   mon: "11:11:11",
    //   tue: "11:11:11",
    //   wed: "11:11:11",  
    //   thu: "11:11:11",
    //   fri: "11:11:11",
    //   sat: "11:11:11",
    //   sun: "11:11:11",
    // })
  }
}
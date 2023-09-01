import { Component, ViewChild } from '@angular/core';
import { faPlus, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from 'src/app/public/modules/timesheet/models/timesheet';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@ui/modal/modal/modal.component';

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
  currentTimesheetId: any;

  @ViewChild('timesheetEditForm') form!: NgForm;
  
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
  ) { 
    this.loadTimesheet()
  }

  loadTimesheet(){ // postgre = http://localhost:3000/api/v1/timesheet
    this.http.get<any>('http://localhost:9000/geo/api/v1/timesheet').subscribe((response: any) => {
      this.timesheet = response.data.timesheet;
      console.log('Received data:', this.timesheet);
    });
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

  /*------------------------ Add entry ------------------------*/
  addTimesheet(){
    this.openModal(0, 'Add data')
  }

  /*------------------------ Edit row ------------------------*/
  // material modal
  editTimesheet(_id: any){
    this.openModal(_id, 'Edit data')
  }

  openModal(_id:any,title:any){
    let _popup = this.dialog.open(ModalComponent, {
      width: '600px',
      data: {
        title: title,
        _id: _id
      }
    })

    _popup.afterClosed().subscribe(item => {
      this.loadTimesheet()
    })
  }
}
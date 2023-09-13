import { Component, ViewChild } from '@angular/core';
import { faPlus, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from 'src/app/public/modules/timesheet/models/timesheet';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@ui/modal/modal/modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TimesheetServiceService } from '../../services/timesheet-service/timesheet-service.service';
import { SnackbarComponent } from '@ui/snackbar/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  dataSource: any;
  displayedColumns: string[] = ["edit", "projects", "description", "mon", "tue", "wed", "thu", "fri", "sat", "sun", "total", "delete"]

  @ViewChild('timesheetEditForm') form!: NgForm;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private timesheetServiceService: TimesheetServiceService,
    private _snackBar: MatSnackBar
  ) { 
    this.loadTimesheet()
  }

  loadTimesheet(){ // postgre = http://localhost:3000/api/v1/timesheet
    this.http.get<any>('http://localhost:9000/geo/api/v1/timesheet').subscribe((response: any) => {
      this.timesheet = response.data.timesheet;
      this.dataSource = new MatTableDataSource<Timesheet>(this.timesheet);
      this.dataSource.paginator = this.paginator
    });
  }

  /*------------------------ Delete row ------------------------*/
  @ViewChild('deleteSwal') deleteSwal: any;

  deleteId: any;

  deleteRow(_id: any) {
    this.deleteId = _id;
    this.deleteSwal.fire();
  }
  
  confirmDelete(){
    this.http.delete('http://localhost:9000/geo/api/v1/timesheet/' + this.deleteId).subscribe();
    this.loadTimesheet()
    this.openSnackBar("Deleted Successfully", "✔")
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

  openModal(_id:any,title:String){
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

  Filterchange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter = value
  }

  /*------------------------ Snackbar alert ------------------------*/
  openSnackBar(title:String,emoji:String) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      data: {
        title: title,
        emoji: emoji,
      }
    });
  }
}
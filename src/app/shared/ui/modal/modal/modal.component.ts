import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { TimesheetServiceService } from 'src/app/public/modules/timesheet/services/timesheet-service/timesheet-service.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@ui/snackbar/snackbar/snackbar.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  inputdata:any;
  editData: any;
  editMode: boolean = false;
  Projects = "";
  faXmark = faXmark;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private timesheetServiceService: TimesheetServiceService,
    private ref: MatDialogRef<ModalComponent>,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.inputdata=this.data;

    if(this.inputdata._id === 0){
      // do nothing      
    }else{
      this.setpopupdata(this.inputdata._id)
      this.editMode = true;
    }
  }

  closeModal(){
    this.ref.close("closed")
  }

  setpopupdata(_id: any) {
    this.timesheetServiceService.getTimesheetById(_id).subscribe(item => {
      this.editData = item;

      this.timesheetForm.setValue({
        projects: this.editData.data.timesheet.projects,
        description: this.editData.data.timesheet.description,
        mon: this.editData.data.timesheet.mon, 
        tue: this.editData.data.timesheet.tue,
        wed: this.editData.data.timesheet.wed,
        thu: this.editData.data.timesheet.thu,
        fri: this.editData.data.timesheet.fri,
        sat: this.editData.data.timesheet.sat,
        sun: this.editData.data.timesheet.sun,
        total: this.editData.data.timesheet.total,
      });
    });
  }
  
  timesheetForm = this.formBuilder.group({
    projects:this.formBuilder.control(""),
    description:this.formBuilder.control(""),
    mon:this.formBuilder.control(""),
    tue:this.formBuilder.control(""),
    wed:this.formBuilder.control(""),
    thu:this.formBuilder.control(""),
    fri:this.formBuilder.control(""),
    sat:this.formBuilder.control(""),
    sun:this.formBuilder.control(""),
    total:this.formBuilder.control(""),
  })

  saveTimesheet(){
    console.log(this.timesheetForm.value);
    const editedFormData = this.timesheetForm.value;
    const timesheetId = this.editData.data.timesheet._id;

    this.timesheetServiceService.updateTimesheet(timesheetId, editedFormData).subscribe(
      (response) => {
        console.log("Timesheet updated successfully!", response);
        this.closeModal();
      },
      (error) => {
        console.error("Error updating timesheet:", error);
      }
    );
  }

  addTimesheet(){
    this.timesheetServiceService.saveTimesheetEntry(this.timesheetForm.value).subscribe(res => {
      this.closeModal();
    })
  }

  onClickSave(){
    if(this.editMode === true){
      this.saveTimesheet()
    }else{
      this.addTimesheet()
    }
  }

  openSnackBar(title:String,emoji:String) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      data: {
        title: title,
        emoji: emoji,
      }
    });
  }

  showAlert(){
    if(this.editMode){
      this.openSnackBar("Updated Successfully", "✔")
    }else{
      this.openSnackBar("Created Successfully", "✔")
    }
  }
}
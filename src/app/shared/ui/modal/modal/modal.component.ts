import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimesheetServiceService } from 'src/app/public/modules/timesheet/services/timesheet-service/timesheet-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  inputdata:any;
  editData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private timesheetServiceService: TimesheetServiceService,
    private ref: MatDialogRef<ModalComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inputdata=this.data;
    this.setpopupdata(this.inputdata._id)
  }

  closeModal(){
    this.ref.close("closed")
  }

  setpopupdata(_id: any) {
    this.timesheetServiceService.getTimesheetById(_id).subscribe(item => {
      this.editData = item;

      this.timesheetForm.setValue({
        projects: this.editData.data.timesheet.projects,
        mon: this.editData.data.timesheet.mon, 
        tue: this.editData.data.timesheet.tue,
        wed: this.editData.data.timesheet.wed,
        thu: this.editData.data.timesheet.thu,
        fri: this.editData.data.timesheet.fri,
        sat: this.editData.data.timesheet.sat,
        sun: this.editData.data.timesheet.sun,
      });
    });
  }
  
  timesheetForm = this.formBuilder.group({
    projects:this.formBuilder.control(""),
    mon:this.formBuilder.control(""),
    tue:this.formBuilder.control(""),
    wed:this.formBuilder.control(""),
    thu:this.formBuilder.control(""),
    fri:this.formBuilder.control(""),
    sat:this.formBuilder.control(""),
    sun:this.formBuilder.control(""),
  })

  saveTimesheet(){
    console.log(this.timesheetForm.value);
    const editedFormData = this.timesheetForm.value;

    const timesheetId = this.editData.data.timesheet._id;

    this.timesheetServiceService.updateTimesheet(timesheetId, editedFormData).subscribe(
      (response) => {
        console.log("Timesheet updated successfully!", response);
        // Close the dialog or handle other UI changes as needed
        this.closeModal();
      },
      (error) => {
        console.error("Error updating timesheet:", error);
        // Handle error cases if needed
      }
    );
  }
}
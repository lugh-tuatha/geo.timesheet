import { Component } from '@angular/core';
import { TrainingDataService } from '../../../../services/training-data/training-data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-training-modal',
  templateUrl: './training-modal.component.html',
  styleUrls: ['./training-modal.component.scss'],
})
export class TrainingModalComponent{
  trainings: any;

  constructor(
    private trainingData: TrainingDataService,
    private ref: MatDialogRef<TrainingModalComponent>,
    private formBuilder: FormBuilder,
  ){ }

  trainingForm = this.formBuilder.group({
    type:this.formBuilder.control(""),
  })

  closeDialog(){
    this.ref.close("closed")
  }

  postTraining(data:any){
    this.trainingData.saveTraining(data).subscribe((result) => {})
    this.closeDialog()
  }
}

import { Component, Input } from '@angular/core';
import { Training } from '../../models/training' 
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TrainingModalComponent } from '../training-modal/training-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  trainings: Training[] = [];

  readonly trainingUrl = 'http://localhost:9000/geo/api/v1/trainings'

  constructor(
    private http:HttpClient,
    public dialog: MatDialog,
  ){
    this.loadtraining()
  }

  loadtraining(){
    this.http.get<any>(this.trainingUrl).subscribe((response: any) => {
      this.trainings = response.data.findTrainings;
    });
  }

  openDialog(): void {
    let openDialog = this.dialog.open(TrainingModalComponent, {
      width: '600px',
    });

    openDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadtraining()
    });
  }
}
import { Component } from '@angular/core';
import { TrainingDataService } from '../../../../services/training-data/training-data.service';
 
@Component({
  selector: 'app-training-modal',
  templateUrl: './training-modal.component.html',
  styleUrls: ['./training-modal.component.scss'],
})
export class TrainingModalComponent{

  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  trainings: any;
  constructor(private trainingData: TrainingDataService){
    this.trainingData.trainings().subscribe((data) => {
       this.trainings = data;
    })
  }

  postTraining(data:any){
    console.warn(data);
    this.trainingData.saveTraining(data).subscribe((result) => {
      console.warn(result)
    })
  }
}

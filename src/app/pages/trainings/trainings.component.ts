import { Component } from '@angular/core';
import { TRAINING } from 'src/app/data/training-data';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent {
  trainings = TRAINING;
}

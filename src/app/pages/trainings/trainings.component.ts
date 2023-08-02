import { Component } from '@angular/core';
import { TRAINING } from 'src/app/data/training-data';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent {
  faPlus = faPlus;
}

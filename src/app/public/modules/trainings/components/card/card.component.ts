import { Component, Input } from '@angular/core';
import { Training } from '../../models/training' 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  readonly trainingUrl = 'http://localhost:9000/geo/api/v1/trainings'

  constructor(private http:HttpClient){}

  trainings: Training[] = [];
  ngOnInit(){
    this.http.get<any>(this.trainingUrl).subscribe((response: any) => {
      this.trainings = response.data.findTrainings;
    });
  }
}
import { Component, Input } from '@angular/core';
import { Training } from 'src/app/model/training';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  readonly ApptivoApiUrl = 'http://localhost:9000/geo/api/v1/trainings'

  constructor(private http:HttpClient){}
  
  trainings: Training[] = [];
  ngOnInit(){
    this.http.get<any>(this.ApptivoApiUrl).subscribe((response: any) => {
      this.trainings = response.data.findTrainings;
    });
  }

  faEllipsisVertical = faEllipsisVertical;
  faPlus = faPlus;
}

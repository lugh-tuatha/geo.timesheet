import { Component, Input } from '@angular/core';
import { Training } from 'src/app/model/training';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  readonly APIUrl = 'http://localhost:9000/geo/api/v1/trainings'

  constructor(private http:HttpClient){}
  trainings: Training[] = [];
  refreshTrainings(){
    this.http.get<any>(this.APIUrl).subscribe((response: any) => {
      this.trainings = response.data.findTrainings;
      console.log('Received data:', this.trainings);
    });
  }

  ngOnInit(){
    this.refreshTrainings();
  }

  // @Input({
  //   required: true,
  // })
  // training: Training = {} as Training;

  faEllipsisVertical = faEllipsisVertical;
}

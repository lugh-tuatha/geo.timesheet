import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrainingDataService {
  readonly trainingUrl = 'http://localhost:9000/geo/api/v1/trainings'

  constructor(private http:HttpClient){}

  trainings(){
    return this.http.get(this.trainingUrl);
  }
  saveTraining(data:any){
    return this.http.post(this.trainingUrl, data);
  }
}
 
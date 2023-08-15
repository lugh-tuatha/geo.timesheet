import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApptivoServiceService {

  constructor(private _http:HttpClient) { }

  getData(): Observable<any>{
    return this._http.get('http://localhost:9000/geo/api/apptivo/work-orders');
  }
}

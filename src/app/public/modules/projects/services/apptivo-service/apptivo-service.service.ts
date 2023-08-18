import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApptivoServiceService {

  constructor(private _http:HttpClient) { }

  // postgre = http://localhost:3000/api/apptivo/workOrders
  // mongodb = http://localhost:9000/geo/api/apptivo/work-orders
  getData(): Observable<any>{
    return this._http.get('http://localhost:3000/api/apptivo/workOrders');
  }
}

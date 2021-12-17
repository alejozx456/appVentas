import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Venta } from '../models/venta';

const httpOption={
  headers: new HttpHeaders({
      'Contend-type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiventaService {


url: string='http://localhost:60589/api/Venta';

  constructor(private _http:HttpClient) { }

  add(venta:Venta):Observable<Response>{
    return this._http.post<Response>(this.url,venta,httpOption)
  }
}

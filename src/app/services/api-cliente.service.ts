import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response} from '../models/response';           
@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {

  url:string='http://localhost:60589/api/Cliente';

  constructor(
    private http: HttpClient
  ) { }

  getCiente():Observable<Response>{
    return this.http.get<Response>(this.url);
  }
}

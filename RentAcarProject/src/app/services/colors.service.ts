import { ColorsGetModul } from './../models/ColorsGetModul';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  colorApi = "http://localhost:3000/colors"

  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ColorsGetModul[]> {
    return this.httpClient.get<ColorsGetModul[]>(this.colorApi);
  }

  // getColorsById(id:number):Observable<ColorsGetModul[]> {
  //   return this.httpClient.get<ColorsGetModul[]>(this.colorApi+'?id'+id);
  // }

  
}

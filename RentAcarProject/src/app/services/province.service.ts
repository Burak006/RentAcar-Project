import { ProvinceGetModul } from './../models/province.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  apiUrl = "http://localhost:3000/province"

  constructor(private httpClient:HttpClient) {}

  getProvinces():Observable<ProvinceGetModul[]> {
    return this.httpClient.get<ProvinceGetModul[]>(this.apiUrl)
  }

  getProvinceId(id:number):Observable<ProvinceGetModul>{
    return this.httpClient.get<ProvinceGetModul>(this.apiUrl + "/"+ id)
  }

  add(province:ProvinceGetModul):Observable<ProvinceGetModul> {
    return this.httpClient.post<ProvinceGetModul>(this.apiUrl+"/",province);
  }

  ProvinceUpdate(id, provinces): Observable<ProvinceGetModul[]> {
    return this.httpClient.put<ProvinceGetModul[]>(this.apiUrl + '/' + id, provinces);
  }
  
  delete(province:ProvinceGetModul):Observable<ProvinceGetModul>{
    return this.httpClient.delete<ProvinceGetModul>(this.apiUrl + "/" + province.id)
  }

 
}

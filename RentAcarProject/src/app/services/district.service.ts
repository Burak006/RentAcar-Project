import { DistrictGetModul } from './../models/district.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  apiUrl = "http://localhost:3000/district"

  constructor(private httpClient:HttpClient) {}

  getDistricts():Observable<DistrictGetModul[]> {
    return this.httpClient.get<DistrictGetModul[]>(this.apiUrl)
  }

  getDistrictId(id:number):Observable<DistrictGetModul>{
    return this.httpClient.get<DistrictGetModul>(this.apiUrl + "/"+ id)
  }

  add(district:DistrictGetModul):Observable<DistrictGetModul> {
    return this.httpClient.post<DistrictGetModul>(this.apiUrl+"/",district);
  }

  DistrictUpdate(id, districts): Observable<DistrictGetModul[]> {
    return this.httpClient.put<DistrictGetModul[]>(this.apiUrl + '/' + id, districts);
  }
  
  delete(district:DistrictGetModul):Observable<DistrictGetModul>{
    return this.httpClient.delete<DistrictGetModul>(this.apiUrl + "/" + district.id)
  }

 
}

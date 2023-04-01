import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandGetModul } from '../models/BrandGetModul';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:3000/brands"

  constructor(private httpClient:HttpClient) {}

  getBrands():Observable<BrandGetModul[]> {
    return this.httpClient.get<BrandGetModul[]>(this.apiUrl)
  }

  getBrandId(id:number):Observable<BrandGetModul>{
    return this.httpClient.get<BrandGetModul>(this.apiUrl + "/"+ id)
  }

  add(brand:BrandGetModul):Observable<BrandGetModul> {
    return this.httpClient.post<BrandGetModul>(this.apiUrl+"/",brand);
  }

  brandUpdate(id, brands): Observable<BrandGetModul[]> {
    return this.httpClient.put<BrandGetModul[]>(this.apiUrl + '/' + id, brands);
  }
  
  delete(brand:BrandGetModul):Observable<BrandGetModul>{
    return this.httpClient.delete<BrandGetModul>(this.apiUrl + "/" + brand.id)
  }

 
}

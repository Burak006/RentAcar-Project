import { BrandGetModul } from './../models/BrandGetModul';
import { ColorsGetModul } from 'src/app/models/ColorsGetModul';
import { CaraddComponent } from '../components/cars/caradd/caradd.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarListGetModul } from '../models/CarListGetModul';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CarlistService {

  queryPath :string=""
  Selectedbrands:BrandGetModul;
  selectedcolors:ColorsGetModul;

  path:string= "http://localhost:3000/carlist"
  
  constructor(private httpClient:HttpClient) { }

  getCarList():Observable<CarListGetModul[]> {
    return this.httpClient.get<CarListGetModul[]>(this.createApiUrl())
  }
//array silinecek
  getCarDetail(id:number):Observable<CarListGetModul> {
    return this.httpClient.get<CarListGetModul>(this.path + "/" + id)
  }

  getCarsBydId(id:number):Observable<CarListGetModul[]> {
    return this.httpClient.get<CarListGetModul[]>(this.path+"?brandId="+id)
  }
  getCarsAdd(id:number):Observable<CarListGetModul[]> {
    return this.httpClient.get<CarListGetModul[]>(this.path+"car-add")
  }
  add(carlist:CarListGetModul):Observable<CarListGetModul> {
    return this.httpClient.post<CarListGetModul>(this.path + "/", carlist);
  }
 
  carsUpdate(id, cars:CarListGetModul): Observable<CarListGetModul[]> {
    return this.httpClient.put<CarListGetModul[]>(this.path + '/' + id, cars);
  }

  delete(detail:CarListGetModul):Observable<CarListGetModul>{
    return this.httpClient.delete<CarListGetModul>(this.path + "/" + detail.id)
  }
//alttaki kodlar marka renk seçimi kodları
  getCarColorBydId(colorId):Observable<CarListGetModul[]> {
    return this.httpClient.get<CarListGetModul[]>(this.path+'?colorId'+colorId)
  }

  
  setSelectedbrands(brands){
    this.Selectedbrands = brands;
  }
  setselectedcolors(colors){
    this.selectedcolors = colors;
  }

  createApiUrl(){
    if(this.Selectedbrands){
      this.queryPath = this.path + "?brandId="+this.Selectedbrands.id
    }

    if(this.selectedcolors){
      this.queryPath = this.path + "?colorId="+this.selectedcolors.id
    }

    if(this.Selectedbrands && this.selectedcolors){
      this.queryPath = this.path + "?brandId="
      +this.Selectedbrands.id+"&colorId="+this.selectedcolors.id
    }

    if(!this.Selectedbrands && !this.selectedcolors){
      this.queryPath = this.path;
     
    }
    return this.queryPath;
  }
 
  

 
  
}


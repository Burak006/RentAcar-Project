import { ColorsGetModul } from 'src/app/models/ColorsGetModul';
import { CarListGetModul } from '../../../models/CarListGetModul';
import { CarlistService } from '../../../services/carlist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { CarListGetModul } from 'src/app/models/CarListGetModul';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  
  carlist:CarListGetModul[]=[];
  filterText:string="";

  constructor(private activatedRoute:ActivatedRoute, private carlistService:CarlistService) { }

  ngOnInit(): void {
    // this.getCarlist()

    this.activatedRoute.params.subscribe(params=> {
      // if(params["id"]) {
      //   this.getCarsBydId(params['id']);
      // }else if(params['colorId']){
      //   this.getCarColorById(params['colorId']);
      // }else {
      // }
      // this.getCarsIdClick(params["id"])
      this.getCarlist()
    })
  }

   getCarlist(){
    this.carlistService.getCarList().subscribe(data => this.carlist = data)
   }
   
   getCarsIdClick(id:number){
    this.carlistService.getCarsAdd(id).subscribe(data => {
      this.carlist = data
    })
   }

   delete(carlist:CarListGetModul):void{
    this.carlist=this.carlist.filter(c=>c !== carlist);
    this.carlistService.delete(carlist).subscribe();
   }
  ////alttaki kodlar marka renk seçimi kodları
   getCarColorById(id:number){
    this.carlistService.getCarColorBydId(id).subscribe((data)=>{
      this.carlist=data});
   }
   
   getCarsBydId(id:number){
    this.carlistService.getCarsBydId(id).subscribe((Response)=>{
      this.carlist=Response;
    });
   }

 

   
}

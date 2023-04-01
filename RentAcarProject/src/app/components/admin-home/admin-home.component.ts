import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarListGetModul } from 'src/app/models/CarListGetModul';
import { CarlistService } from 'src/app/services/carlist.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

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

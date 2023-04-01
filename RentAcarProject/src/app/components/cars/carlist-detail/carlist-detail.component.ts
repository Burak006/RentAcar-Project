import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarListGetModul } from 'src/app/models/CarListGetModul';
import { CarlistService } from 'src/app/services/carlist.service';

@Component({
  selector: 'app-carlist-detail',
  templateUrl: './carlist-detail.component.html',
  styleUrls: ['./carlist-detail.component.css']
})
export class CarlistDetailComponent implements OnInit {


  detail:CarListGetModul;

  constructor(
    private activatedRoute:ActivatedRoute,
    private carlistService:CarlistService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      this.getCarDetail(params["id"])
      
    })
  }

  getCarDetail(id){
    this.carlistService.getCarDetail(id).subscribe(data =>{
       this.detail = data
       console.log(data);
       
      })
   } 

  
   
 
}

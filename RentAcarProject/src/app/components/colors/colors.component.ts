import { CarlistService } from './../../services/carlist.service';
import { ColorsService } from './../../services/colors.service';
import { Component, OnInit } from '@angular/core';
import { ColorsGetModul } from 'src/app/models/ColorsGetModul';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  currentcolors:ColorsGetModul;
  colors:ColorsGetModul[]=[];
  
  constructor(private colorsService:ColorsService,private carlistService:CarlistService) { }

  ngOnInit(): void {
    this.getColor()
    
      } 

  getColor(){
    this.colorsService.getColor().subscribe((Response) =>{
     this.colors = Response});
   }
   
   selectcolors(colors){
    this.carlistService.setselectedcolors(colors)
  }
  }

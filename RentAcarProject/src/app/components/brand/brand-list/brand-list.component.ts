import { Component, OnInit } from '@angular/core';
import { BrandGetModul } from 'src/app/models/BrandGetModul';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands:BrandGetModul[]=[];
  filterText:string="";
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((data) =>{ 
    this.brands = data;
    })
   }

   delete(brands:BrandGetModul):void{
    this.brands=this.brands.filter( c=>c !== brands);
    this.brandService.delete(brands).subscribe();
   }

}

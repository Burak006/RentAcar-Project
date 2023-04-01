import { DistrictGetModul } from '../../../models/district.module';
import { DistrictService } from '../../../services/district.service';
import { ProvinceService } from '../../../services/province.service';
import { ProvinceGetModul } from '../../../models/province.module';
import { CarlistService } from '../../../services/carlist.service';
import { BrandService } from '../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { BrandGetModul } from 'src/app/models/BrandGetModul';
import { ColorsGetModul } from 'src/app/models/ColorsGetModul';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  currentcolors:ColorsGetModul;
  colors:ColorsGetModul[]=[];
  
  currentbrands:BrandGetModul;
  brands:BrandGetModul[]=[];
  provinces:ProvinceGetModul[]=[];
  districts:DistrictGetModul[]=[];
  CarlistByBrandId!:string;
  filterText:string="";
  
  constructor(private brandService:BrandService, private carlistService:CarlistService,
    private colorsService:ColorsService, private provinceService:ProvinceService,
    private districtService:DistrictService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColor();
    this.getProvinces();
    this.getDistricts();
    }

    getColor(){
      this.colorsService.getColor().subscribe((Response) =>{
       this.colors = Response});
     }
     
     selectcolors(colors){
      this.carlistService.setselectedcolors(colors)
    }

    getBrands(){
      this.brandService.getBrands().subscribe((data) =>{ 
      this.brands = data;
      })
     }

     getProvinces(){
      this.provinceService.getProvinces().subscribe((data) =>{ 
      this.provinces = data;
      })
     }

     getDistricts(){
      this.districtService.getDistricts().subscribe((data) =>{ 
      this.districts = data;
      })
     }
     
    selectBrands(data:any){
      //console.log(data, 'seçilen brand')
      this.CarlistByBrandId=data.name
      this.carlistService.setSelectedbrands(data)
    }
  
    delete(brands:BrandGetModul):void{
      this.brands=this.brands.filter( c=>c !== brands);
      this.brandService.delete(brands).subscribe();
     }

  }
  



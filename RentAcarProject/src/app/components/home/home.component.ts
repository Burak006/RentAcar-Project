import { Component, OnInit } from '@angular/core';
import { BrandGetModul } from 'src/app/models/BrandGetModul';
import { CarListGetModul } from 'src/app/models/CarListGetModul';
import { ColorsGetModul } from 'src/app/models/ColorsGetModul';
import { DistrictGetModul } from 'src/app/models/district.module';
import { ProvinceGetModul } from 'src/app/models/province.module';
import { BrandService } from 'src/app/services/brand.service';
import { CarlistService } from 'src/app/services/carlist.service';
import { ColorsService } from 'src/app/services/colors.service';
import { DistrictService } from 'src/app/services/district.service';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentcolors:ColorsGetModul;
  colors:ColorsGetModul[]=[];
  carlist:CarListGetModul[]=[];
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
    this.getCarlist();
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
    
  
   // burdan aşağısı carlist komutları
     getCarlist(){
      this.carlistService.getCarList().subscribe(data => this.carlist = data)
     }

     getCarsIdClick(id:number){
      this.carlistService.getCarsAdd(id).subscribe(data => {
        this.carlist = data
      })
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

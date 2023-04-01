import { CarlistService } from '../../../services/carlist.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProvinceGetModul } from 'src/app/models/province.module';
import { DistrictGetModul } from 'src/app/models/district.module';
import { ProvinceService } from 'src/app/services/province.service';
import { DistrictService } from 'src/app/services/district.service';
import { BrandGetModul } from 'src/app/models/BrandGetModul';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-caradd',
  templateUrl: './caradd.component.html',
  styleUrls: ['./caradd.component.css']
})
export class CaraddComponent implements OnInit {

  brands:BrandGetModul[]=[];
  provinces:ProvinceGetModul[]=[];
  districts:DistrictGetModul[]=[];
  carAddForm:FormGroup

  constructor(private formbuilder:FormBuilder,private carlistService:CarlistService,
    private brandService:BrandService,
    private provinceService:ProvinceService,
    private districtService:DistrictService) { }

  ngOnInit(): void {
this.createProductsAddForm();
this.getBrands();
this.getProvinces();
this.getDistricts();
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

  createProductsAddForm(){
    this. carAddForm= this.formbuilder.group({
      carname:["",[Validators.required,]],
      brandId:["",[Validators.required,]],
      sherry:["",[Validators.required,]],
      advert_title:["",[Validators.required,]],
      km:["",[Validators.required,]],
      price:["",[Validators.required,]],
      listing_date:["",[Validators.required,]],
      province:["",[Validators.required,]],
      district:["",[Validators.required,]],
      fuel:["",[Validators.required,]],
      gear:["",[Validators.required,]],
      vehicle_status:["",[Validators.required,]],
      case_type:["",[Validators.required,]],
      motor_power:["",[Validators.required,]],
      engine_capacity:["",[Validators.required,]],
      traction:["",[Validators.required,]],
      guarantee:["",[Validators.required,]],
      damage_registered:["",[Validators.required,]],
      number_plate:["",[Validators.required,]],
      from_who:["",[Validators.required,]],
      video_call:["",[Validators.required,]],
      swap:["",[Validators.required,]],
      year:["",[Validators.required,]],
      model:["",[Validators.required,]],
      color:["",[Validators.required,]],
      colorId:["",[Validators.required,]],
      state:["",[Validators.required,]],
      description:["",[Validators.required,]],
      imagePath:["",[Validators.required,]],
      image_1:["",[Validators.required,]],
      image_2:["",[Validators.required,]],
      image_3:["",[Validators.required,]]
    })
  }

  add(){
    this.carlistService
    .add(this.carAddForm.value).subscribe((response)=>{
      console.log(response);
    })
  }

}

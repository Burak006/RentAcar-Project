import { CarListGetModul } from '../../../models/CarListGetModul';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarlistService } from 'src/app/services/carlist.service';

@Component({
  selector: 'app-cars-update',
  templateUrl: './cars-update.component.html',
  styleUrls: ['./cars-update.component.css']
})
export class CarsUpdateComponent implements OnInit {


  carsUpdateForm:FormGroup;
  cars:CarListGetModul;
  params:number;
  private location:Location;

  constructor(
    private activatedRoute:ActivatedRoute,
    private carlistService:CarlistService,
    private formBuilder: FormBuilder
   ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      console.log(params);
      
      this.getCarsBydId(params["id"]);
      
    })
  }

  getCarsBydId(id){
    this.carlistService.getCarDetail(id).subscribe(data =>{
       this.cars = data;
      this.createCarsFrom();

      })
   } 
  createCarsFrom() {
    this.carsUpdateForm = this.formBuilder.group({
      carname: [this.cars.carname, Validators.required],
      brandId: [this.cars.brandId, Validators.required],
      sherry: [this.cars.sherry, Validators.required],
      advert_title: [this.cars.advert_title, Validators.required],
      km: [this.cars.km, Validators.required],
      price: [this.cars.price, Validators.required],
      carlisting_datename: [this.cars.listing_date, Validators.required],
      province: [this.cars.province, Validators.required],
      district: [this.cars.district, Validators.required],
      fuel: [this.cars.fuel, Validators.required],
      gear: [this.cars.gear, Validators.required],
      vehicle_status: [this.cars.vehicle_status, Validators.required],
      case_type: [this.cars.case_type, Validators.required],
      motor_power: [this.cars.motor_power, Validators.required],
      engine_capacity: [this.cars.engine_capacity, Validators.required],
      traction: [this.cars.traction, Validators.required],
      guarantee: [this.cars.guarantee, Validators.required],
      damage_registered: [this.cars.damage_registered, Validators.required],
      number_plate: [this.cars.number_plate, Validators.required],
      from_who: [this.cars.from_who, Validators.required],
      video_call: [this.cars.video_call, Validators.required],
      listing_date: [this.cars.listing_date, Validators.required],
      swap: [this.cars.swap, Validators.required],
      year: [this.cars.year, Validators.required],
      model: [this.cars.model, Validators.required],
      color: [this.cars.color, Validators.required],
      colorId: [this.cars.colorId, Validators.required],
      state: [this.cars.state, Validators.required],
      description: [this.cars.description, Validators.required],
      imagePath: [this.cars.imagePath, Validators.required],
      image_1: [this.cars.image_1, Validators.required],
      image_2: [this.cars.image_2, Validators.required],
      image_3: [this.cars.image_3, Validators.required]
    });
  }

  carsUpdate() {
    this.carlistService
      .carsUpdate(
        this.activatedRoute.snapshot.params['id'],
        this.carsUpdateForm.value
      )
      .subscribe((response) => {});
  }

}

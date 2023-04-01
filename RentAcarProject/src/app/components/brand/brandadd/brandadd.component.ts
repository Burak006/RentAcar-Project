import { BrandService } from '../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-brandadd',
  templateUrl: './brandadd.component.html',
  styleUrls: ['./brandadd.component.css']
})
export class BrandaddComponent implements OnInit {

  brandAddForm:FormGroup 
  constructor(private formbuilder:FormBuilder, private brandService:BrandService) { }

  ngOnInit(): void {
    this.createProductsAddForm();
  }

  createProductsAddForm(){
    this. brandAddForm= this.formbuilder.group({
      name:["",[Validators.required,]],
      logo:["",[Validators.required,]],
    })
  }

  add(){
    this.brandService
    .add(this.brandAddForm.value).subscribe((response)=>{
      console.log(response);
    })
  }

}

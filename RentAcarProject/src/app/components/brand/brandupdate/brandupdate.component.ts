import { BrandGetModul } from '../../../models/BrandGetModul';
import { BrandService } from '../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brandupdate',
  templateUrl: './brandupdate.component.html',
  styleUrls: ['./brandupdate.component.css'],
})
export class BrandupdateComponent implements OnInit {
  
  brandUpdateForm: FormGroup;
  brands: BrandGetModul;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBrandId(params['id']);
    });
  }

  createCarFrom() {
    this.brandUpdateForm = this.formBuilder.group({
      name: [this.brands.name, Validators.required],
      logo: [this.brands.logo, Validators.required],
    });
  }

  getBrandId(id: number) {
    this.brandService.getBrandId(id).subscribe((data) => {
      this.brands = data;
      this.createCarFrom();
    });
  }
  
  brandUpdate() {
    this.brandService
      .brandUpdate(
        this.activatedRoute.snapshot.params['id'],
        this.brandUpdateForm.value
      )
      .subscribe((response) => {});
  }
}

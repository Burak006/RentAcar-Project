import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsUpdateComponent } from './cars-update.component';

describe('CarsUpdateComponent', () => {
  let component: CarsUpdateComponent;
  let fixture: ComponentFixture<CarsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

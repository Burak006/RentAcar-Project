import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlistDetailComponent } from './carlist-detail.component';

describe('CarlistDetailComponent', () => {
  let component: CarlistDetailComponent;
  let fixture: ComponentFixture<CarlistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarlistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarlistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

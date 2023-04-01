import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraddComponent } from './caradd.component';

describe('CaraddComponent', () => {
  let component: CaraddComponent;
  let fixture: ComponentFixture<CaraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

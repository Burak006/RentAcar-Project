import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarsDetailsComponent } from './home-cars-details.component';

describe('HomeCarsDetailsComponent', () => {
  let component: HomeCarsDetailsComponent;
  let fixture: ComponentFixture<HomeCarsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCarsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

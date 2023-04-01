import { CarsUpdateComponent } from './components/cars/cars-update/cars-update.component';
import { CarlistDetailComponent } from './components/cars/carlist-detail/carlist-detail.component';
import { BrandaddComponent } from './components/brand/brandadd/brandadd.component';
import { CarlistComponent } from './components/cars/carlist/carlist.component';
import { BrandsComponent } from './components/brand/brands/brands.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaraddComponent } from './components/cars/caradd/caradd.component';
import { BrandupdateComponent } from './components/brand/brandupdate/brandupdate.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { LoginListComponent } from './components/login-list/login-list.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeCarsDetailsComponent } from './components/home-cars-details/home-cars-details.component';
const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'home/cars/details/:id',component:HomeCarsDetailsComponent},
  
  { path:"", component: HomeComponent },

  { path: 'admin', component: AdminPanelComponent, children:[

  { path:"",component:AdminHomeComponent},

  /*{ path:'brands/:id', component: CarlistComponent},*/
  { path:'brands',component:BrandListComponent},
  { path:'brands/add', component: BrandaddComponent},
  { path:'brands/update/:id', component: BrandupdateComponent},

  { path:'cars', component: CarlistComponent },
  { path:'cars/add', component: CaraddComponent},
  { path:'cars/details/:id', component: CarlistDetailComponent},
  { path:'cars/update/:id', component: CarsUpdateComponent},

  { path:'colors/:colorId', component: CarlistComponent},
  { path:'brands/:id/colors/:id', component: CarlistComponent},

  { path:'login/list',component:LoginListComponent}

  ],
  canActivate:[LoginGuard]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

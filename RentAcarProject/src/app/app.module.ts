import { BrandsComponent } from './components/brand/brands/brands.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { CarlistComponent } from './components/cars/carlist/carlist.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrandaddComponent } from './components/brand/brandadd/brandadd.component';
import { CaraddComponent } from './components/cars/caradd/caradd.component';
import { CarlistDetailComponent } from './components/cars/carlist-detail/carlist-detail.component';
import { BrandupdateComponent } from './components/brand/brandupdate/brandupdate.component';
import { CarsUpdateComponent } from './components/cars/cars-update/cars-update.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrandsFilterPipe } from './pipes/brands-filter.pipe';
import { ColorsComponent } from './components/colors/colors.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/register/register.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { SettingsComponent } from './layouts/settings/settings.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { HomeComponent } from './components/home/home.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { LoginListComponent } from './components/login-list/login-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeCarsDetailsComponent } from './components/home-cars-details/home-cars-details.component';




@NgModule({
    declarations: [
        AppComponent,
        BrandsComponent,
        NaviComponent,
        CarlistComponent,
        BrandaddComponent,
        CaraddComponent,
        CarlistDetailComponent,
        BrandupdateComponent,
        CarsUpdateComponent,
        FilterPipe,
        BrandsFilterPipe,
        ColorsComponent,
        LoginComponent,
        AdminPanelComponent,
        FooterComponent,
        ToolbarComponent,
        SettingsComponent,
        AdminHomeComponent,
        HomeComponent,
        BrandListComponent,
        LoginListComponent,
        ContactComponent,
        HomeCarsDetailsComponent,
     
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),

    ]
})
export class AppModule { }

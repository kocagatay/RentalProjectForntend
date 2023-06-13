import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; //BURAYI EKLİYORUZ İNJECTİON
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" // notification için gerekli animasyonar

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PayComponent } from './components/pay/pay.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
//import { GuardService } from './services/guardservice';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    CardetailComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CarImageComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ColorFilterPipe,
    BrandFilterPipe,
    CarAddComponent,
    RentalAddComponent,
    PayComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarEditComponent,
    LoginComponent,
    RegisterComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // BUNU DA BURAYA EKLİYORUZ.
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right" //bildirim pop-up büyük ihtimal bunlar öyle varsaydım şu an
    })
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true} // BURAYI SON DERSTE EKLEDİN AMA ANGULARIN YENİ SÜRÜMLERİNDE ROUTE İLE OLUYORMUŞ Bİ ARAŞTIR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

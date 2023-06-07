import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PayComponent } from './components/pay/pay.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { NaviComponent } from './components/navi/navi.component';
import { CartComponent } from './components/cart/cart.component';
//import { GuardService } from './services/guardservice';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/cardetail/:carId', component: CardetailComponent },
  { path: 'cars/update/:carId', component: CarEditComponent },
  { path: 'cars/add', component: CarAddComponent, canActivate:[LoginGuard]},
  { path: 'brands/add', component: BrandAddComponent,canActivate:[LoginGuard] },
  { path: 'colors/add', component: ColorAddComponent,canActivate:[LoginGuard] },
  { path: 'rentals', component: RentalComponent },
  { path: 'rentals/add', component: RentalAddComponent, canActivate:[LoginGuard] },
  { path: 'payments/pay', component: PayComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

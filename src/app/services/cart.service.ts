import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';
import { CarDetail } from '../models/cardetail';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car: CarDetail){
    let item = CartItems.find(c=>c.car.carId === car.carId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push()
    }
  }

  removeFromCart(car:CarDetail){
    let item = CartItems.find(c=>c.car.carId === car.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }


  list():CartItem[]{
    return CartItems;
  }
}

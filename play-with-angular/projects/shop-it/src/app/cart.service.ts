import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: Array<any> = []
  private cartStream = new BehaviorSubject(this.cart)

  addToCart(cartLine: any) {
    this.cart = this.cart.concat(cartLine)
    this.cartStream.next(this.cart)
  }

  getCart() {
    return this.cart
  }
  getCartStream() {
    return this.cartStream;
  }


}

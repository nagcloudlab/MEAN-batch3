import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-badge.component.html',
  styleUrl: './cart-badge.component.css'
})
export class CartBadgeComponent {

  //@Input()
  cart: Array<any> = []

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartStream()
      .subscribe({
        next: (cart: Array<any>) => {
          this.cart = cart
        }
      })
  }

}

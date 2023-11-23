import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { NttCardComponent } from './ntt-card/ntt-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ProductListComponent,
    CartBadgeComponent,
    CartViewComponent,
    NttCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'shop-IT-v1';
  cart: Array<any> = []
  isCartOpen: boolean = false
  toggleCartView() {
    this.isCartOpen = !this.isCartOpen
  }
  addToCart(cartLine: any) {
    this.cart = this.cart.concat(cartLine)
  }
}

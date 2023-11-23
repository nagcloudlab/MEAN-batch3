import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  @Output()
  buy = new EventEmitter()

  products: Array<any> = [
    {
      id: 1,
      name: "Laptop",
      price: 3000.00,
      currencyCode: 'INR',
      description: "Laptop description",
      imagePath: 'assets/Laptop.png'
    },
    {
      id: 2,
      name: "Mobile",
      price: 2000.00,
      currencyCode: 'EUR',
      description: "Mobile description",
      imagePath: 'assets/Mobile.png'
    },
  ]

  handleBuy(event: any) {
    this.buy.emit(event)
  }

}

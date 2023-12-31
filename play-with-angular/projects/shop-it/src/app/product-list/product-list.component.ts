import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [
    //ProductsService
  ]
})
export class ProductListComponent {


  products: Array<any> = []
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe({
        next: (products: Array<any>) => {
          this.products = products
        }
      })
  }

}

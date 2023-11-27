import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from '../review/review.component';
import { HighlightDirective } from '../highlight.directive';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ReviewComponent,
    ReviewFormComponent,
    HighlightDirective,
    DiscountPipe,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input("value")
  product!: any

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) { }

  reviews: Array<any> = []

  currentTab = 1;
  isTabSelected(tabIndex: number): boolean {
    return this.currentTab === tabIndex
  }
  handleTabChange(tabIndex: number) {
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.reviews = this.productsService.getReviews(this.product.id)
    }
  }
  handleBuy(event: MouseEvent) {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price
    })
  }
  handleNewReview(event: any) {
    let { formData } = event;
    this.productsService.addNewReview(this.product.id, formData)
  }

}

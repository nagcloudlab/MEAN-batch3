import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from '../review/review.component';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ReviewComponent,
    HighlightDirective
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input("value")
  product!: any

  @Output()
  buy = new EventEmitter()

  reviews: Array<any> = [
    { stars: 5, author: 'who-1', body: 'sample-review-1' },
    { stars: 1, author: 'who-2', body: 'sample-review-2' }
  ]

  currentTab = 1;
  isTabSelected(tabIndex: number): boolean {
    return this.currentTab === tabIndex
  }
  handleTabChange(tabIndex: number) {
    this.currentTab = tabIndex
  }
  handleBuy(event: MouseEvent) {
    this.buy.emit({ id: this.product.id, name: this.product.name, price: this.product.price })
  }

}

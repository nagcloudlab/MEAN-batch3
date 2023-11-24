import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {

  cart!: Array<any>

  @ViewChild("cartHeader")
  cartHeader!: ElementRef

  subscriber!: any;

  // timeNow!: string
  // intervalId!: any


  constructor(private cartService: CartService) {
    console.log("CartViewComponent::constructor()");
    // console.log(this.cart);
    // why we need?
    // todo any one-time intialization
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("CartViewComponent::ngOnChanges()");
    console.log(changes);
    // why we need ?
    // by comparing current-input-props with previous
    // to any side-effect ( data-fetching , ...)
  }

  ngOnInit() {
    console.log("CartViewComponent::ngOnInit()");
    console.log(this.cart);
    // why we need ?
    // todo any one-time intialization
    // e.g subscribing with observable-streams, start-timer
    // this.intervalId = setInterval(() => {
    //   console.log("tick");
    //   this.timeNow = new Date().toLocaleTimeString()
    // }, 1000);
    //this.cart = this.cartService.getCart();
    this.subscriber = this.cartService.getCartStream()
      .subscribe({
        next: (cart: Array<any>) => {
          this.cart = cart
        }
      })
  }

  ngOnDestroy() {
    console.log("CartViewComponent::ngOnDestroy()");
    // why we need?
    // to cleanup actions
    // clearInterval(this.intervalId)
    this.subscriber.unsubscribe()
  }

  ngAfterViewInit() {
    console.log("CartViewComponent::ngAfterViewInit()");
    // why we need?
    // to do any low-level operations on View DOM elements
    // const cartHeaderNativeEle = this.cartHeader.nativeElement;
    // cartHeaderNativeEle.addEventListener('mouseover', (e: any) => {
    //   cartHeaderNativeEle.style.backgroundColor = "yellow";
    // })
    // cartHeaderNativeEle.addEventListener('mouseleave', (e: any) => {
    //   cartHeaderNativeEle.style.backgroundColor = "";
    // })
  }

}

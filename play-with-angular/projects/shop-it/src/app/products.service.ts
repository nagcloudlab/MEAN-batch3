import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    //.. 
    return [
      {
        id: 1,
        name: "Laptop",
        price: 3000.00,
        makeTimeStamp: Date.now(),
        currencyCode: 'INR',
        description: "Laptop description",
        imagePath: 'assets/Laptop.png'
      },
      {
        id: 2,
        name: "Mobile",
        price: 2000.00,
        makeTimeStamp: Date.now(),
        currencyCode: 'INR',
        description: "Mobile description",
        imagePath: 'assets/Mobile.png'
      },
    ]
  }
  getReviews(productId: number) {
    //..
    return [
      { stars: 5, author: 'who-1', body: 'sample-review-1' },
      { stars: 1, author: 'who-2', body: 'sample-review-2' }
    ]
  }

}

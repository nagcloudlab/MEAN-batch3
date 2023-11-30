import { Injectable } from '@nestjs/common';

const products = [
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
const reviews = {
    1: [
        { stars: 5, author: 'who-1', body: 'sample-review-1' },
        { stars: 1, author: 'who-2', body: 'sample-review-2' }
    ],
    2: [
        { stars: 5, author: 'who-1', body: 'sample-review-1' },
        { stars: 1, author: 'who-2', body: 'sample-review-2' }
    ]
}

@Injectable()
export class ProductsService {
    getProducts() {
        //..
        return products;
    }
    getReviews(productId: number) {
        return reviews[productId]
    }
    addNewReview(productId: number, review: any) {
        reviews[productId].unshift(review)
        return review
    }
}

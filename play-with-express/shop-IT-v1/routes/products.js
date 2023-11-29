const express = require('express');
const router = express.Router();

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

router
    .get('/', (req, res, next) => {
        res.status(200).json(products)
    })
    .get('/:id', (req, res, next) => {
        const id = parseInt(req.params.id)
        const product = products.find(p => p.id === id)
        if (product)
            res.status(200).json(product)
        else
            res.status(404).json({ message: 'not found' })
    })
    .get('/:id/reviews', (req, res, next) => {
        const id = parseInt(req.params.id)
        const productReviews = reviews[id]
        res.status(200).json(productReviews)
    })
    .post('/:id/reviews', (req, res, next) => {
        const id = parseInt(req.params.id)
        const review = req.body
        reviews[id].unshift(review)
        res.status(201).json(review)
    })

module.exports = router;
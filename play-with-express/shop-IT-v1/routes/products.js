const express = require('express');
const { MongoClient } = require("mongodb");

const router = express.Router();

const mongoose = require('mongoose');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shop_IT');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));

const { Schema } = mongoose;

const ProductSchema = new Schema({
    _id: Number,
    name: String,
    price: Number,
    description: String,
    tags: Array,
    specification: Object,
    makeDate: Date,
})
const Product = mongoose.model('Product', ProductSchema, "products");


const ReviewSchema = new Schema({
    stars: Number,
    body: String,
    author: String,
    product_id: Number,
})
const Review = mongoose.model('Review', ReviewSchema, "reviews");



// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/shop_IT";
const client = new MongoClient(uri);


router
    .get('/', (req, res, next) => {
        (async () => {
            // const products = await Product.find({})
            // res.status(200).json(products);

            const database = client.db('shop_IT');
            const products = database.collection('products');
            const cursor = await products.find();
            const result = [];
            for await (const doc of cursor) {
                result.push(doc);
            }
            res.status(200).json(result)

        })()
    })
    .get('/:id', (req, res, next) => {

    })
    .get('/:id/reviews', (req, res, next) => {
        const productId = parseInt(req.params.id);
        (async () => {
            const reviews = await Review.find({ product_id: productId })
            res.status(200).json(reviews);
        })()
    })
    .post('/:id/reviews', (req, res, next) => {
        const productId = parseInt(req.params.id);
        const review = req.body;
        (async () => {
            const newReview = new Review({ product_id: productId, ...review });
            console.log(newReview);
            const r = await newReview.save();
            res.status(201).json(r);
        })()
    })

module.exports = router;
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import NewReview from './dto/new-review.dto';

@Controller('api/v1/products')
export class ProductsController {

    constructor(private productsService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productsService.getProducts()
    }
    @Get("/:productId/reviews")
    getReviews(@Param("productId") productId: number) {
        return this.productsService.getReviews(productId)
    }
    @Post("/:productId/reviews")
    addNewReview(@Param("productId") productId: number, @Body() newReview: NewReview) {
        return this.productsService.addNewReview(productId, newReview)
    }


}

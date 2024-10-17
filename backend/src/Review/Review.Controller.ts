import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import ReviewService from "./Review.Service";
import GetProductsReviewsRequestdto from "./Dtos/GetProductsReviews.Request.Dto";
import AuthGuard from "src/Guard/Auth.Guard";
import AddReviewRequestDto from "./Dtos/AddReview.Request.Dto";
import { GetToken } from "src/Decorators/Token.Decorator";
import TokenType from "src/utils/TokenType";

@Controller('/Review')
export default class ReviewController {

    constructor(
        private readonly reviewService: ReviewService
    ) { }

    @Get()
    public async getReviewsByProductId(@Body() { productId }: GetProductsReviewsRequestdto) {

        return await this.reviewService.getReviewsByProductId(+productId);

    }

    @UseGuards(AuthGuard)
    @Post()
    public async addReview(
        @GetToken() token: TokenType,
        @Body() { comment, productId, stars }: AddReviewRequestDto
    ) {

        return await this.reviewService
            .addReviewService(token, { comment, productId, stars })

    }

}
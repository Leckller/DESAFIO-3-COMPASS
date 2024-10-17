import { IsNumber } from "class-validator";

export default class GetProductsReviewsRequestdto {

    @IsNumber()
    productId: number;

}
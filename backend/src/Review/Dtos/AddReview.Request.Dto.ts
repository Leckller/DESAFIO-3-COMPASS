import { IsNumber, IsString } from "class-validator";

export default class AddReviewRequestDto {

    @IsNumber()
    productId: number;

    @IsNumber()
    stars: number;

    @IsString()
    comment: string;

}
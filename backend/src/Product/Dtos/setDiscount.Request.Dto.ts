import { IsNumber } from "class-validator";

export default class SetDiscountRequestDto {

    @IsNumber()
    discount: number;

    @IsNumber()
    productId: number;

}
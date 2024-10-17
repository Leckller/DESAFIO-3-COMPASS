import { IsNumber } from "class-validator";

export default class AddItemRequestDto {

    @IsNumber()
    productId: number;

}
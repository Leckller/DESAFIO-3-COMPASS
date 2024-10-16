import { IsNumber } from "class-validator";

export default class AddRelationRequestDto {

    @IsNumber()
    productId: number;

    @IsNumber()
    imageId: number;

}
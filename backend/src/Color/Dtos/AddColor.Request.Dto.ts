import { IsNumber, IsString } from "class-validator";

export default class AddColorRequestDto {

    @IsString()
    color: string;

    @IsNumber()
    productId: number;

}
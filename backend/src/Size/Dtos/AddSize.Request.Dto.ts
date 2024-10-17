import { IsNumber, IsString } from "class-validator";

export default class {

    @IsString()
    size: string;

    @IsNumber()
    productId: number;

}
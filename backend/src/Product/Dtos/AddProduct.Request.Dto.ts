import { IsNumber, IsString } from "class-validator";

export default class {

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    largeDescription: string;

    @IsNumber()
    price: number;

    @IsNumber()
    discount_percent: number;

    @IsNumber()
    category: number;

}
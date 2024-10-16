import { IsNumber, IsString } from "class-validator";

export default class AddCategoryRequestDto {

    @IsString()
    name: string;

    @IsNumber()
    imageId: number;

}
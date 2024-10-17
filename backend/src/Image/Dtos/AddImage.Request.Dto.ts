import { IsNumber, IsString } from "class-validator";

export default class AddImageRequestRequestDto {

    @IsString()
    imageLink: string;

}
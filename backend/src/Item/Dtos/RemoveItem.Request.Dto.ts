import { IsNumber } from "class-validator";

export default class RemoveItemRequestDto {

    @IsNumber()
    itemId: number;
}
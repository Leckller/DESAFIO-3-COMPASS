import { IsNumber } from "class-validator";

export default class AddTagRelationRequestDto {

  @IsNumber()
  productId: number;

  @IsNumber()
  tagId: number;

}
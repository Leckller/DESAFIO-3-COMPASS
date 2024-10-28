import { IsString } from "class-validator";

export default class AddTagRequestDto {

  @IsString()
  tagName: string;

}
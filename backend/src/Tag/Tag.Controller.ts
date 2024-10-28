import { Body, Controller, Get, Post } from "@nestjs/common";
import TagService from "./Tag.Service";
import AddTagRelationRequestDto from "./Dtos/AddTagRelation.Request.Dto";
import AddTagRequestDto from "./Dtos/AddTag.Request.Dto";

@Controller('tag')
export default class TagController {

  constructor(
    private readonly TagService: TagService
  ) { }

  @Get('all')
  public async Tags() {

    return await this.TagService.tags();

  }

  @Post()
  public async AddTag(@Body() { tagName }: AddTagRequestDto) {

    return await this.TagService.addTag({ tagName });

  }

  @Post('relation')
  public async AddTagRelation(@Body() { productId, tagId }: AddTagRelationRequestDto) {

    return await this.TagService.addTagRelation({ productId, tagId });

  }

};
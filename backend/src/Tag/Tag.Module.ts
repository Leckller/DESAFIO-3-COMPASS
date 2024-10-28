import { Module } from "@nestjs/common";
import TagService from "./Tag.Service";
import TagController from "./Tag.Controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import TagEntity from "./Tag.Entity";
import TagRelationEntity from "./TagRelation.Entity";
import ProductEntity from "src/Product/Product.Entity";

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [
    TypeOrmModule.forFeature([
      TagEntity,
      TagRelationEntity,
      ProductEntity
    ])
  ]
})
export default class TagModule { };
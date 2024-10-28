import { Module } from "@nestjs/common";
import TagService from "./Tag.Service";
import TagController from "./Tag.Controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import TagEntity from "./Tag.Entity";
import TagRelationEntity from "./TagRelation.Entity";
import ProductEntity from "src/Product/Product.Entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      TagEntity,
      TagRelationEntity,
      ProductEntity
    ])
  ]
})
export default class TagModule { };
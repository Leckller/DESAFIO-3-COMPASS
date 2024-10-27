import { Module } from "@nestjs/common";
import SeedsService from "./Seeds.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ImagesEntity from "src/Image/Images.Entity";
import CategoryEntity from "src/Category/Category.Entity";
import ProductEntity from "src/Product/Product.Entity";
import ImageEntity from "src/Image/Image.Entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ImagesEntity,
      ImageEntity,
      CategoryEntity,
      ProductEntity
    ])
  ],
  providers: [SeedsService],
})
export default class SeedModule { }
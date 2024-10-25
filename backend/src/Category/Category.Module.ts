import { Module } from "@nestjs/common";
import CategoryController from "./Category.Controller";
import CategoryService from "./Category.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ImageEntity from "src/Image/Image.Entity";
import CategoryEntity from "./Category.Entity";
import ProductEntity from "src/Product/Product.Entity";

@Module({

    controllers: [CategoryController],
    providers: [CategoryService],
    imports: [
        TypeOrmModule.forFeature([
            ImageEntity, CategoryEntity, ProductEntity
        ])
    ]

})
export default class CategoryModule { }
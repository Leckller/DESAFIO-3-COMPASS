import { Module } from "@nestjs/common";
import CategoryController from "./Category.Controller";
import CategoryService from "./Category.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ImageEntity from "src/Image/Image.Entity";
import CategoryEntity from "./Category.Entity";

@Module({

    controllers: [CategoryController],
    providers: [CategoryService],
    imports: [
        TypeOrmModule.forFeature([
            ImageEntity, CategoryEntity
        ])
    ]

})
export default class CategoryModule { }
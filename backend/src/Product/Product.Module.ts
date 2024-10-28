import { Module } from "@nestjs/common";
import ProductController from "./Product.Controller";
import ProductService from "./Product.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ProductEntity from "./Product.Entity";
import CategoryEntity from "src/Category/Category.Entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({

    controllers: [ProductController],
    providers: [ProductService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            ProductEntity,
            CategoryEntity
        ])
    ]

})
export default class ProductModule { }
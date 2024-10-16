import { Module } from "@nestjs/common";
import ProductController from "./Product.Controller";
import ProductService from "./Product.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ProductEntity from "./Product.Entity";

@Module({

    controllers: [ProductController],
    providers: [ProductService],
    imports: [
        TypeOrmModule.forFeature([
            ProductEntity
        ])
    ]

})
export default class ProductModule { }
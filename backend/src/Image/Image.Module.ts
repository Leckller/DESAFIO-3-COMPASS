import { Module } from "@nestjs/common";
import ImageController from "./Image.Controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import ImageEntity from "./Image.Entity";
import ImageService from "./Image.Service";
import ImagesEntity from "./Images.Entity";
import ProductEntity from "src/Product/Product.Entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({

    controllers: [ImageController],
    providers: [ImageService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            ImageEntity,
            ImagesEntity,
            ProductEntity
        ])
    ]

})
export default class ImageModule { }
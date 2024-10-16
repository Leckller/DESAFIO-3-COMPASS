import { Module } from "@nestjs/common";
import ImageController from "./Image.Controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import ImageEntity from "./Image.Entity";
import ImageService from "./Image.Service";
import ImagesEntity from "./Images.Entity";

@Module({

    controllers: [ImageController],
    providers: [ImageService],
    imports: [
        TypeOrmModule.forFeature([
            ImageEntity,
            ImagesEntity
        ])
    ]

})
export default class ImageModule { }
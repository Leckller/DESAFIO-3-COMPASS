import { Module } from "@nestjs/common";
import ColorController from "./Color.Controller";
import ColorService from "./Color.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ProductEntity from "src/Product/Product.Entity";
import ColorEntity from "./Color.Entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({

    controllers: [ColorController],
    providers: [ColorService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            ColorEntity, ProductEntity
        ])
    ]

})
export default class ColorModule { }
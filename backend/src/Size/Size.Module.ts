import { Module } from "@nestjs/common";
import SizeController from "./Size.Controller";
import SizeService from "./Size.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ProductEntity from "src/Product/Product.Entity";
import SizeEntity from "./Size.Entity";

@Module({
    controllers: [SizeController],
    providers: [SizeService],
    imports: [
        TypeOrmModule.forFeature([
            ProductEntity, SizeEntity
        ])
    ]
})
export default class SizeModule { }
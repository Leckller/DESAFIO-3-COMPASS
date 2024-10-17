import { Module } from "@nestjs/common";
import SizeController from "./Size.Controller";
import SizeService from "./Size.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ProductEntity from "src/Product/Product.Entity";
import SizeEntity from "./Size.Entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({
    controllers: [SizeController],
    providers: [SizeService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            ProductEntity, SizeEntity
        ])
    ]
})
export default class SizeModule { }
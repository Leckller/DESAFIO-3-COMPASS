import { Module } from "@nestjs/common";
import ItemController from "./Item.Controller";
import ItemService from "./Item.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ItemEntity from "./Item.Entity";
import ProductEntity from "src/Product/Product.Entity";
import AuthModule from "src/Auth/Auth.Module";
import UserEntity from "src/User/User.Entity";

@Module({

    controllers: [ItemController],
    providers: [ItemService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            ItemEntity, ProductEntity, UserEntity
        ])
    ],

})
export default class ItemModule { }
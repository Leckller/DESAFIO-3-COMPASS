import { Module } from "@nestjs/common";
import LikeController from "./Like.Controller";
import LikeService from "./Like.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import LikeEntity from "./Like.Entity";
import AuthModule from "src/Auth/Auth.Module";
import ProductEntity from "src/Product/Product.Entity";
import UserEntity from "src/User/User.Entity";

@Module({

    controllers: [LikeController],
    providers: [LikeService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            LikeEntity, ProductEntity, UserEntity
        ])
    ]

})
export default class LikeModule { }
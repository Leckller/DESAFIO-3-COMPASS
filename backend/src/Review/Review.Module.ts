import { Module } from "@nestjs/common";
import ReviewController from "./Review.Controller";
import ReviewService from "./Review.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ReviewEntity from "./Review.Entity";
import ProductEntity from "src/Product/Product.Entity";
import UserEntity from "src/User/User.Entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({

    controllers: [ReviewController],
    providers: [ReviewService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            ReviewEntity, ProductEntity, UserEntity
        ])
    ]

})
export default class ReviewModule { }
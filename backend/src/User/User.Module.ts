import { Module } from "@nestjs/common";
import UserController from "./User.Controller";
import UserService from "./User.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserEntity from "./User.Entity";
import AuthModule from "src/Auth/Auth.Module";

@Module({

    controllers: [UserController],
    providers: [UserService],
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            UserEntity,
        ])
    ]

})
export default class UserModule { }
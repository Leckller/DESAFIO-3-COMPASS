import { Module } from "@nestjs/common";
import AuthService from "./Auth.Service";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserEntity from "src/User/User.Entity";

@Module({
    providers: [AuthService],
    exports: [AuthService],
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ])
    ]
})
export default class AuthModule { };
import { Module } from "@nestjs/common";
import AuthGuard from "./Auth.Guard";
import UserModule from "../User/User.Module";
import AuthModule from "../Auth/Auth.Module";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserEntity from "../User/User.Entity";
import AuthAdmGuard from "./AuthAdm.Guard";

@Module({
    providers: [AuthGuard, AuthAdmGuard],
    exports: [AuthGuard, AuthAdmGuard],
    imports: [
        UserModule,
        AuthModule,
        TypeOrmModule.forFeature([
            UserEntity
        ])
    ]
})
export default class GuardModule { };
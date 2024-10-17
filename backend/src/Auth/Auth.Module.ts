import { Module } from "@nestjs/common";
import AuthService from "./Auth.Service";

@Module({
    providers: [AuthService],
    exports: [AuthService],
})
export default class AuthModule { };
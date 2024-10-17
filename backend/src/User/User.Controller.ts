import { Body, Controller, Post } from "@nestjs/common";
import UserService from "./User.Service";
import NewUserRequestDto from "./Dtos/NewUser.Request.Dto";
import LoginUserRequestDto from "./Dtos/Login.Request.Dto";

@Controller('/User')
export default class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Post('register')
    public async register(@Body() { email, name, password }: NewUserRequestDto) {

        return this.userService.register({ email, name, password });

    }

    @Post('login')
    public async login(@Body() { email, password }: LoginUserRequestDto) {

        return this.userService.login({ email, password });

    }

}
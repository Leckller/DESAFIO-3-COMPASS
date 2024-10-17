import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import AuthGuard from "src/Guard/Auth.Guard";
import LikeService from "./Like.Service";
import { GetToken } from "src/Decorators/Token.Decorator";
import TokenType from "src/utils/TokenType";
import LikeRequestDto from "./Dtos/Like.Request.Dto";

@Controller('/Like')
export default class LikeController {

    constructor(private readonly likeService: LikeService) { }

    @UseGuards(AuthGuard)
    @Post()
    public async toggleLike(@GetToken() token: TokenType, @Body() { productId }: LikeRequestDto) {

        return await this.likeService.toggleLike(token, productId);

    }

}
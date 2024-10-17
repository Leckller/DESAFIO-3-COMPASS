import { Body, Controller, Delete, Post, UseGuards } from "@nestjs/common";
import ItemService from "./Item.Service";
import AuthGuard from "src/Guard/Auth.Guard";
import { GetToken } from "src/Decorators/Token.Decorator";
import TokenType from "src/utils/TokenType";
import AddItemRequestDto from "./Dtos/AddItem.Request.Dto";
import RemoveItemRequestDto from "./Dtos/RemoveItem.Request.Dto";

@Controller('/Item')
export default class ItemController {

    constructor(
        private readonly itemService: ItemService
    ) { }

    @UseGuards(AuthGuard)
    @Post()
    public async addItemToCart(
        @GetToken() token: TokenType,
        @Body() { productId }: AddItemRequestDto
    ) {

        return await this.itemService.addToCart(token, { productId });

    }

    @UseGuards(AuthGuard)
    @Delete()
    public async removeItemToCart(
        @GetToken() token: TokenType,
        @Body() { itemId }: RemoveItemRequestDto
    ) {

        return await this.itemService.removeToCart(token, { itemId });

    }

}
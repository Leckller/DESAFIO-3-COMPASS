import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import SizeService from "./Size.Service";
import AddSizeRequestDto from "./Dtos/AddSize.Request.Dto";
import AuthGuard from "src/Guard/Auth.Guard";

@Controller('/Size')
export default class SizeController {

    constructor(
        private readonly sizeService: SizeService
    ) { }

    @UseGuards(AuthGuard)
    @Post()
    public async addSize(@Body() { productId, size }: AddSizeRequestDto) {

        return await this.sizeService.addSize({ productId, size });

    }

}
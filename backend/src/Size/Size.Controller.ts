import { Body, Controller, Post } from "@nestjs/common";
import SizeService from "./Size.Service";
import AddSizeRequestDto from "./Dtos/AddSize.Request.Dto";

@Controller('/Size')
export default class SizeController {

    constructor(
        private readonly sizeService: SizeService
    ) { }

    @Post()
    public async addSize(@Body() { productId, size }: AddSizeRequestDto) {

        return await this.sizeService.addSize({ productId, size });

    }

}
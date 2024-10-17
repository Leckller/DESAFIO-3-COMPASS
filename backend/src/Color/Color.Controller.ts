import { Body, Controller, Post } from "@nestjs/common";
import ColorService from "./Color.Service";
import AddColorRequestDto from "./Dtos/AddColor.Request.Dto";

@Controller('/Color')
export default class ColorController {

    constructor(
        private readonly colorService: ColorService
    ) { }

    @Post()
    public async AddColor(@Body() { color, productId }: AddColorRequestDto) {

        return await this.colorService.addColor({ color, productId })

    }

}
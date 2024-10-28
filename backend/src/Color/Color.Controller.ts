import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import ColorService from "./Color.Service";
import AddColorRequestDto from "./Dtos/AddColor.Request.Dto";
import AuthAdmGuard from "src/Guard/AuthAdm.Guard";

@Controller('/Color')
export default class ColorController {

    constructor(
        private readonly colorService: ColorService
    ) { }

    @UseGuards(AuthAdmGuard)
    @Post()
    public async AddColor(@Body() { color, productId }: AddColorRequestDto) {

        return await this.colorService.addColor({ color, productId })

    }

}
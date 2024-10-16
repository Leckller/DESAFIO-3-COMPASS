import { Body, Controller, Post } from "@nestjs/common";
import ImageService from "./Image.Service";
import AddImageRequestRequestDto from "./Dtos/AddImage.Request.Dto";

@Controller('/image')
export default class ImageController {

    constructor(
        private readonly imageService: ImageService
    ) { }

    @Post()
    public async addImage(@Body() { imageLink }: AddImageRequestRequestDto) {

        return this.imageService.addImage({ imageLink });

    }
}
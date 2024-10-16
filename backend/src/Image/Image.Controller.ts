import { Body, Controller, Post } from "@nestjs/common";
import ImageService from "./Image.Service";
import AddImageRequestRequestDto from "./Dtos/AddImage.Request.Dto";
import AddRelationRequestDto from "./Dtos/AddRelation.Request.Dto";

@Controller('/image')
export default class ImageController {

    constructor(
        private readonly imageService: ImageService
    ) { }

    @Post()
    public async addImage(@Body() { imageLink }: AddImageRequestRequestDto) {

        return this.imageService.addImage({ imageLink });

    }

    @Post("relation")
    public async addRelation(@Body() { imageId, productId }: AddRelationRequestDto) {

        return this.imageService.addRelation({ imageId, productId })

    }
}
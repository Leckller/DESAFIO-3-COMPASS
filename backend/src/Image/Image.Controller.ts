import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import ImageService from "./Image.Service";
import AddImageRequestRequestDto from "./Dtos/AddImage.Request.Dto";
import AddRelationRequestDto from "./Dtos/AddRelation.Request.Dto";
import AuthAdmGuard from "src/Guard/AuthAdm.Guard";

@Controller('/image')
export default class ImageController {

    constructor(
        private readonly imageService: ImageService
    ) { }

    @UseGuards(AuthAdmGuard)
    @Post()
    public async addImage(@Body() { imageLink }: AddImageRequestRequestDto) {

        return this.imageService.addImage({ imageLink });

    }

    @UseGuards(AuthAdmGuard)
    @Post("relation")
    public async addRelation(@Body() { imageId, productId }: AddRelationRequestDto) {

        return this.imageService.addRelation({ imageId, productId })

    }
}
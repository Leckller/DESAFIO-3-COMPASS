import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ImageEntity from "./Image.Entity";
import { Repository } from "typeorm";
import AddImageRequestRequestDto from "./Dtos/AddImage.Request.Dto";

@Injectable()
export default class ImageService {

    constructor(
        @InjectRepository(ImageEntity)
        private readonly imageRepository: Repository<ImageEntity>
    ) { }


    public async addImage({ imageLink }: AddImageRequestRequestDto) {

        const LinkExists = await this.imageRepository.findOne({ where: { imageLink } })

        if (LinkExists) {

            throw new BadRequestException('Essa imagem já está no banco de dados.')

        }

        const newImage = this.imageRepository.create({ imageLink });

        await this.imageRepository.save(newImage);

        return newImage;

    }

}
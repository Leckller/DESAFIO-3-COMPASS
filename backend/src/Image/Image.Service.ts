import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ImageEntity from "./Image.Entity";
import { Repository } from "typeorm";
import AddImageRequestRequestDto from "./Dtos/AddImage.Request.Dto";
import ProductEntity from "src/Product/Product.Entity";
import AddRelationRequestDto from "./Dtos/AddRelation.Request.Dto";
import ImagesEntity from "./Images.Entity";

@Injectable()
export default class ImageService {

    constructor(
        @InjectRepository(ImageEntity)
        private readonly imageRepository: Repository<ImageEntity>,
        @InjectRepository(ImagesEntity)
        private readonly relationImagesRepository: Repository<ImagesEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
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

    public async addRelation({ imageId, productId }: AddRelationRequestDto) {

        const image = await this.imageRepository.findOne({ where: { id: imageId } });

        if (!image) {

            throw new NotFoundException('Imagem não encontrada.');

        }

        const product = await this.productRepository.findOne({ where: { id: productId } });

        if (!product) {

            throw new NotFoundException('Imagem não encontrada.');

        }

        const relationExists = await this.relationImagesRepository
            .findOne({
                where: {
                    image: { id: imageId },
                    product: { id: productId }
                }
            });

        if (relationExists) {

            throw new BadRequestException("Essa relação de produto e imagem já existe.")
        }

        const relation = this.relationImagesRepository.create({ image, product });

        await this.relationImagesRepository.save(relation);

        return relation;

    }

}
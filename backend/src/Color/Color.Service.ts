import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import AddColorRequestDto from "./Dtos/AddColor.Request.Dto";
import { InjectRepository } from "@nestjs/typeorm";
import ColorEntity from "./Color.Entity";
import { Repository } from "typeorm";
import ProductEntity from "src/Product/Product.Entity";

@Injectable()
export default class ColorService {

    constructor(
        @InjectRepository(ColorEntity)
        private readonly colorRepository: Repository<ColorEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) { }


    public async addColor({ color, productId }: AddColorRequestDto) {

        const product = await this.productRepository.findOne({
            where: { id: productId }
        });

        if (!product) {

            throw new NotFoundException('Produto não encontrado');

        }

        const sizeExists = await this.colorRepository
            .findOne({
                where: { product: { id: productId }, color },
            });

        if (sizeExists) {

            throw new BadRequestException('Essa cor de produto já existe');

        }

        const newSize = this.colorRepository.create({ product, color });

        await this.colorRepository.save(newSize);

        return newSize;

    }

}
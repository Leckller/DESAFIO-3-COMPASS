import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import AddSizeRequestDto from "./Dtos/AddSize.Request.Dto";
import { InjectRepository } from "@nestjs/typeorm";
import SizeEntity from "./Size.Entity";
import { Repository } from "typeorm";
import ProductEntity from "src/Product/Product.Entity";

@Injectable()
export default class SizeService {

    constructor(
        @InjectRepository(SizeEntity)
        private readonly sizeRepository: Repository<SizeEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) { }

    public async addSize({ productId, size }: AddSizeRequestDto) {

        const product = await this.productRepository.findOne({
            where: { id: productId }
        });

        if (!product) {

            throw new NotFoundException('Produto não encontrado');

        }

        const sizeExists = await this.sizeRepository
            .findOne({
                where: { product: { id: productId }, size },
            });

        if (sizeExists) {

            throw new BadRequestException('Esse tamanho de produto já existe');

        }

        const newSize = this.sizeRepository.create({ product, size });

        await this.sizeRepository.save(newSize);

        return newSize;

    }

}
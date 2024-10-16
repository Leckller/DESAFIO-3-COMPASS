import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ProductEntity from "./Product.Entity";
import { Repository } from "typeorm";
import AddProductRequestDto from "./Dtos/AddProduct.Request.Dto";
import CategoryEntity from "src/Category/Category.Entity";
import SetDiscountRequestDto from "./Dtos/setDiscount.Request.Dto";

@Injectable()
export default class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>
    ) { }


    public async getProducts(page: number = 0) {

        try {

            const pages = await this.productRepository
                .find({
                    skip: page * 10, take: 8,
                    relations: {
                        category: true,
                        images: true,
                        reviews: true,
                        sizes: true,
                        colors: true,
                    }
                });

            return pages;

        } catch {

            return []

        }

    }

    public async addProduct(product: AddProductRequestDto) {

        const { description, discount_percent, largeDescription, name, price } = product;

        const category = await this.categoryRepository
            .findOne({ where: { id: product.category } });

        if (!category) {

            throw new NotFoundException('Categoria não encontrada');

        }

        const newProduct = this.productRepository.create({
            category,
            description,
            discount_percent,
            large_description: largeDescription,
            name,
            price: +price,
            // TODO
            sku: '01010101'
        });

        await this.productRepository.save(newProduct);

        return newProduct;

    }

    public async setDiscount({ discount, productId }: SetDiscountRequestDto) {

        const product = await this.productRepository.findOne({ where: { id: productId } });

        if (!product) {

            throw new NotFoundException('Produto não encontrado');

        }

        if (discount < 0 || discount > 80) {

            throw new BadRequestException("Disconto inválido");

        }

        product.discount_percent = discount;

        await this.productRepository.save(product);

        return product;

    }

}
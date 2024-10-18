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
        // Retorna os produtos apenas com o relacionamento de imagens
        // Metodo recomentado para páginas sem descrições ( Home e Shop )
        try {

            const pages = await this.productRepository
                .find({
                    skip: page * 10, take: 8,
                    relations: {
                        images: true,
                    }
                });

            return pages;

        } catch {

            return []

        }

    }

    public async getProductByName(productName: string) {
        // Retorna um produto com todos os seus relacionamentos
        // Metodo recomentado para página com descrição do produto ( Product )
        try {
            
            const pages = await this.productRepository
                .findOne({
                    where: {name: productName},
                    relations: {
                        images: {image: true},
                        category: true,
                        colors: true,
                        sizes: true,
                        reviews: true,
                    },
                    // Seleciona apenas os atributos necessários
                    select: {
                        category: {id: true, name: true},
                        colors: {id: true, color: true},
                        sizes: {id: true, size: true},
                        reviews: {id: true, comment: true, stars: true, },
                        images: {id: true, image: {id: true, imageLink: true}},
                    }
                });

            return pages;

        } catch {

            return {}

        }

    }

    public async addProduct(product: AddProductRequestDto) {

        try {
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
        } catch {

            return {}

        }

    }

    public async setDiscount({ discount, productId }: SetDiscountRequestDto) {

        try {

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

        } catch {

            return {}

        }

    }

}
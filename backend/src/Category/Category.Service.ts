import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import CategoryEntity from "./Category.Entity";
import { Repository } from "typeorm";
import ImageEntity from "src/Image/Image.Entity";
import AddCategoryRequestDto from "./Dtos/AddCategory.Request.Dto";
import ProductEntity from "src/Product/Product.Entity";
import { ISort } from "src/Types/Sort";

@Injectable()
export default class CategoryService {

    constructor(

        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(ImageEntity)
        private readonly imageRepository: Repository<ImageEntity>,
        @InjectRepository(ProductEntity)
        private readonly ProductRepository: Repository<ProductEntity>

    ) { }

    public async getCategories(page: number = 0) {

        const categories = await this.categoryRepository
            .find({
                skip: +page * 10,
                take: 8,
                relations: { image: true },
                select: {
                    image: { id: true, imageLink: true },
                    name: true, id: true
                }
            });

        return categories;

    }

    public async getCategoryById(id: number) {

        const category = await this.categoryRepository
            .findOne({
                where: { id },
                relations: {
                    products: { images: { image: true } },
                    image: true
                },
                select: {
                    id: true,
                    name: true,
                    image: { id: true, imageLink: true },
                    products: {
                        id: true,
                        price: true,
                        description: true,
                        name: true,
                        discount_percent: true,
                        images: {
                            id: true,
                            image: { id: true, imageLink: true }
                        },
                        update_date: true,
                    }
                }
            });

        const countProducts = await this.ProductRepository.count({ where: { category: { id } } });

        return { category, countProducts };

    }

    public async getCategoryProductsByName(name: string, page: number = 0, show: number = 2, sort: ISort = 'default') {

        let order = {}
        if (sort === 'highest') {
            order = { price: 'DESC' }
        } else if (sort === 'discount') {
            order = { discount_percent: 'DESC' }
        } else {
            order = { price: 'ASC' }
        }

        // Paginação feita para pegar de 2 em 2 produtos por pagina e faz a contagem
        const [products, countProducts] = await this.ProductRepository.findAndCount({
            where: { category: { name } },
            order,
            relations: { images: { image: true } },
            skip: +page * show,
            take: show
        });

        return { products, countProducts, categoryName: name };

    }

    public async addCategory({ imageId, name }: AddCategoryRequestDto) {

        const image = await this.imageRepository.findOne({ where: { id: imageId } })

        if (!image) {

            throw new NotFoundException("Imagem não encontrada.")

        }

        const categoryExists = await this.categoryRepository.findOne({ where: { name } })

        if (categoryExists) {

            throw new BadRequestException('Essa categoria já existe!');

        }

        const imageCategoryInUse = await this.categoryRepository.findOne({ where: { image: { id: imageId } } });

        if (imageCategoryInUse) {

            throw new BadRequestException("Essa imagem já está em uso por outra categoria.")

        }

        const newCategory = this.categoryRepository.create({ image, name })

        await this.categoryRepository.save(newCategory);

        return newCategory;

    }

}